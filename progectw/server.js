require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit'); // เพิ่ม express-rate-limit
const app = express();
const PORT = 3000;

// ดึงค่าจาก .env
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const jwtSecret = process.env.JWT_SECRET || 'default_secret';

// เชื่อมต่อฐานข้อมูล
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(cors());
app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('Authorization Header:', authHeader); // Log Header ทั้งหมด

  if (!authHeader) {
    console.error('No token provided in Authorization header.');
    return res.status(401).json({ message: 'No token provided' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    console.error('Invalid Authorization header format.');
    return res.status(401).json({ message: 'Invalid token format' });
  }

  const token = parts[1];
  console.log('Token received:', token); // Log Token ที่ได้รับ

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      console.error('Error verifying token:', err.message);
      return res.status(403).json({ message: 'Invalid token' });
    }

    console.log('Decoded Token Payload:', user); // Log ข้อมูลที่ถอดรหัสได้
    req.user = user;
    next();
  });
};








// ตัวอย่าง Endpoint ที่ต้องใช้ Token
app.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Welcome to the protected route!', user: req.user });
});


app.get('/profile', verifyToken, (req, res) => {
  const userId = req.user.id;

  db.query('SELECT username, email, phoneNumber, country FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error('Database error during profile retrieval:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(results[0]);
  });
});

app.get('/available-rooms', (req, res) => {
  const query = 'SELECT * FROM rooms WHERE is_available = 1';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error', error: err });
    }
    res.json(results); // ส่งข้อมูลห้องว่างกลับไป
  });
});

// API: ดึงข้อมูลห้องพัก
app.get('/api/rooms', (req, res) => {
  const query = 'SELECT * FROM rooms'; // Query ดึงข้อมูลห้องพักทั้งหมด
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching rooms:', err); // แสดงข้อผิดพลาดในคอนโซล
      res.status(500).json({ message: 'Server error' }); // ส่งข้อความข้อผิดพลาดกลับไปยัง Client
    } else if (results.length === 0) {
      res.status(404).json({ message: 'No rooms found' }); // ส่งข้อความถ้าไม่มีข้อมูลในตาราง
    } else {
      res.json(results); // ส่งข้อมูลห้องพักในรูปแบบ JSON กลับไปยัง Client
    }
  });
});


// API: ดึงข้อมูลการจองเรียงตาม ID
app.get('/api/bookings', (req, res) => {
  const query = 'SELECT * FROM bookings ORDER BY id DESC'; // เรียงตาม ID จากมากไปน้อย
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching bookings:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      res.json(results);
    }
  });
});

// API: เพิ่มการจอง
app.post('/api/bookings', (req, res) => {
  const { guest_name, room_number, check_in_date, check_out_date, total_price, status } = req.body;

  // ตรวจสอบว่า Check-In Date ไม่ย้อนหลัง
  const today = new Date();
  const checkInDate = new Date(check_in_date);
  const checkOutDate = new Date(check_out_date);

  if (checkInDate < today) {
    return res.status(400).json({ message: 'Check-In date cannot be in the past.' });
  }

  // ตรวจสอบว่า Check-Out Date ต้องหลัง Check-In Date
  if (checkOutDate <= checkInDate) {
    return res.status(400).json({ message: 'Check-Out date must be after Check-In date.' });
  }

  // ตรวจสอบห้องว่าง
  db.query(
    'SELECT is_available FROM rooms WHERE room_number = ?',
    [room_number],
    (err, results) => {
      if (err) {
        console.error('Error checking room availability:', err);
        res.status(500).json({ message: 'Server error' });
      } else if (results.length === 0 || !results[0].is_available) {
        res.status(400).json({ message: 'Room is not available' });
      } else {
        // เพิ่มการจอง
        db.query(
          'INSERT INTO bookings (guest_name, room_number, check_in_date, check_out_date, total_price, status) VALUES (?, ?, ?, ?, ?, ?)',
          [guest_name, room_number, check_in_date, check_out_date, total_price, status],
          (err) => {
            if (err) {
              console.error('Error adding booking:', err);
              res.status(500).json({ message: 'Server error' });
            } else {
              // อัปเดตสถานะห้องเป็นไม่ว่าง
              db.query(
                'UPDATE rooms SET is_available = FALSE WHERE room_number = ?',
                [room_number],
                (err) => {
                  if (err) {
                    console.error('Error updating room status:', err);
                    res.status(500).json({ message: 'Error updating room status' });
                  } else {
                    res.status(200).json({ message: 'Booking added successfully' });
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

// API: เช็คอิน
app.put('/api/checkin/:id', (req, res) => {
  const bookingId = req.params.id;

  db.query(
    'UPDATE bookings SET status = "Checked-in" WHERE id = ?',
    [bookingId],
    (err, results) => {
      if (err) {
        console.error('Error during check-in:', err);
        res.status(500).json({ message: 'Server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Booking not found' });
      } else {
        res.status(200).json({ message: 'Checked-in successfully' });
      }
    }
  );
});

// API: เช็คเอาท์ห้อง
app.put('/api/checkout/room/:roomNumber', (req, res) => {
  const roomNumber = req.params.roomNumber;

  // อัปเดตสถานะห้องเป็น Available และอัปเดตการจองที่เกี่ยวข้องเป็น Checked-out
  db.query(
    'UPDATE rooms SET is_available = TRUE WHERE room_number = ?',
    [roomNumber],
    (err, roomResults) => {
      if (err) {
        console.error('Error updating room status:', err);
        res.status(500).json({ message: 'Server error' });
      } else if (roomResults.affectedRows === 0) {
        res.status(404).json({ message: 'Room not found' });
      } else {
        // อัปเดตสถานะการจองล่าสุดของห้องเป็น Checked-out
        db.query(
          'UPDATE bookings SET status = "Checked-out" WHERE room_number = ? AND status != "Checked-out" ORDER BY id DESC LIMIT 1',
          [roomNumber],
          (err, bookingResults) => {
            if (err) {
              console.error('Error updating booking status:', err);
              res.status(500).json({ message: 'Server error' });
            } else if (bookingResults.affectedRows === 0) {
              res.status(404).json({ message: 'No active booking found for this room' });
            } else {
              res.status(200).json({ message: 'Room checked-out successfully' });
            }
          }
        );
      }
    }
  );
});

// API: ดึงข้อมูลการจองทั้งหมด
app.get('/api/bookings', (req, res) => {
  db.query('SELECT * FROM bookings ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('Error fetching bookings:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      res.status(200).json(results);
    }
  });
});

// // Protected Route
// app.get('/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'This is a protected route', user: req.user });
// });

const fetch = require('node-fetch'); // หรือ axios สำหรับ HTTP requests

// Secret key ของ Google reCAPTCHA
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY; // ดึงค่า Secret Key

app.post('/register', async (req, res) => {
  const { username, email, password, phoneNumber, country, captcha } = req.body;

  // ตรวจสอบว่า field ที่จำเป็นทั้งหมดครบถ้วนหรือไม่
  if (!username || !email || !password || !phoneNumber || !country || !captcha) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // ตรวจสอบ CAPTCHA กับ Google
    const captchaVerificationResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: RECAPTCHA_SECRET_KEY,
          response: captcha,
        }),
      }
    );

    const captchaResult = await captchaVerificationResponse.json();

    // ตรวจสอบผลการยืนยัน CAPTCHA
    if (!captchaResult.success) {
      return res.status(400).json({ message: 'CAPTCHA verification failed' });
    }

    // ตรวจสอบว่าผู้ใช้มีอยู่แล้วหรือไม่ในฐานข้อมูล
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error' });

      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      try {
        // แฮชรหัสผ่านก่อนบันทึก
        const hashedPassword = await bcrypt.hash(password, 10);

        // บันทึกข้อมูลผู้ใช้ใหม่
        db.query(
          'INSERT INTO users (username, email, password, phoneNumber, country) VALUES (?, ?, ?, ?, ?)',
          [username, email, hashedPassword, phoneNumber, country],
          (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            res.status(200).json({ message: 'User registered successfully' });
          }
        );
      } catch (error) {
        res.status(500).json({ message: 'Error hashing password' });
      }
    });
  } catch (error) {
    console.error('Error verifying CAPTCHA:', error);
    res.status(500).json({ message: 'Server error during CAPTCHA verification' });
  }
});


// **Rate Limiter สำหรับ /login**
const loginLimiter = rateLimit({
  windowMs:  60 * 1000, // 1 นาที
  max: 5, // อนุญาตให้ลองเข้าสู่ระบบได้สูงสุด 5 ครั้งต่อ IP
  message: 'Too many login attempts, please try again after 1 minutes', // ข้อความเมื่อถูกบล็อก
});
// Endpoint สำหรับการเข้าสู่ระบบ
app.post('/login', loginLimiter, (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // ตรวจสอบข้อมูลในตาราง users
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length > 0) {
      const user = results[0];

      // ตรวจสอบรหัสผ่าน
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      // สร้าง JWT
      const tokenPayload = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn: '1h' });

      console.log('Generated Token:', token); // แสดง Token ที่ถูกสร้าง
      console.log('Token Payload:', tokenPayload); // แสดงข้อมูลภายใน Token
      return res.status(200).json({
        message: 'Login successful',
        token,
        role: user.role,
        user_id: user.id, // ส่ง user_id กลับมาด้วย
      });
    }

    // ตรวจสอบข้อมูลในตาราง role หากไม่พบใน users
    db.query('SELECT * FROM role WHERE username = ?', [username], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Server error' });
      }

      if (results.length > 0) {
        const roleUser = results[0];

        // ตรวจสอบรหัสผ่าน (กรณีไม่มี bcrypt)
        if (password !== roleUser.password) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }

        // สร้าง JWT
        const tokenPayload = {
          id: user.id,
          username: user.username,
          role: user.role,
        };
  
        const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn: '1h' });
  
        console.log('Generated Token:', token); // แสดง Token ที่ถูกสร้าง
        console.log('Token Payload:', tokenPayload); // แสดงข้อมูลภายใน Token

        return res.status(200).json({
          message: 'Login successful',
          token,
          role: roleUser.role,
        });
      }

      // หากไม่พบข้อมูลในทั้งสองตาราง
      return res.status(404).json({ message: 'User not found' });
    });
  });
});

const nodemailer = require('nodemailer');

// ฟังก์ชันสำหรับส่งอีเมล
const sendConfirmationEmail = async (reservationData) => {
  const { email, guest_name, total_price, check_in_date, check_out_date } = reservationData;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tarittawan.xdd@g.swu.ac.th',
      pass: 'ocfh ardw yjes lzrq',
    },
  });

  const mailOptions = {
    from: 'tarittawan.xdd@g.swu.ac.th',
    to: email,
    subject: 'Booking Confirmation',
    text: `Dear ${guest_name},

Thank you for booking with us. Here are your reservation details:

- Check-In Date: ${check_in_date}
- Check-Out Date: ${check_out_date}
- Total Amount: ${total_price} bath

If you have any questions, feel free to contact us.

Best regards,
Your Hotel Team`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};



// API สำหรับบันทึกการจอง
app.post('/api/reservations', verifyToken, (req, res) => {
  const user_id = req.body.user_id || req.user.id;

  const { room_number, check_in_date, check_out_date, total_price } = req.body;

  if (!user_id || !room_number || !check_in_date || !check_out_date || !total_price) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  // ตรวจสอบห้องว่าง
  db.query(
    'SELECT is_available FROM rooms WHERE room_number = ?',
    [room_number],
    (err, results) => {
      if (err) {
        console.error('Error checking room availability:', err);
        return res.status(500).json({ message: 'Server error while checking room availability.' });
      }

      if (results.length === 0 || !results[0].is_available) {
        return res.status(400).json({ message: 'Room is not available.' });
      }

      // ดึงชื่อผู้จองและอีเมล
      const getUserQuery = 'SELECT username, email FROM users WHERE id = ?';

      db.query(getUserQuery, [user_id], (err, userResults) => {
        if (err) {
          console.error('Error fetching user data:', err);
          return res.status(500).json({ message: 'Failed to retrieve user data.' });
        }

        if (userResults.length === 0) {
          return res.status(404).json({ message: 'User not found.' });
        }

        const guest_name = userResults[0].username;
        const email = userResults[0].email;

        // บันทึกการจอง
        const insertBookingQuery = `
          INSERT INTO bookings (guest_name, room_number, check_in_date, check_out_date, total_price)
          VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
          insertBookingQuery,
          [guest_name, room_number, check_in_date, check_out_date, total_price],
          async (err, insertResult) => {
            if (err) {
              console.error('Error inserting booking:', err);
              return res.status(500).json({ message: 'Database error while saving booking.' });
            }

            console.log('Booking inserted successfully with ID:', insertResult.insertId);

            // อัปเดตสถานะห้อง
            db.query(
              'UPDATE rooms SET is_available = 0 WHERE room_number = ?',
              [room_number],
              async (updateErr) => {
                if (updateErr) {
                  console.error('Error updating room availability:', updateErr);
                  return res.status(500).json({ message: 'Failed to update room status.' });
                }

                // สร้างข้อมูลสำหรับส่งอีเมล
                const reservationData = {
                  email,
                  guest_name,
                  total_price,
                  check_in_date,
                  check_out_date,
                };

                try {
                  await sendConfirmationEmail(reservationData);
                  console.log('Confirmation email sent successfully.');
                  res.status(201).json({
                    message: 'Reservation saved successfully, and email sent.',
                    reservationId: insertResult.insertId,
                    total_price: total_price,
                  });
                } catch (emailErr) {
                  console.error('Error sending confirmation email:', emailErr);
                  res.status(201).json({
                    message: 'Reservation saved successfully, but failed to send email.',
                    reservationId: insertResult.insertId,
                    total_price: total_price,
                  });
                }
              }
            );
          }
        );
      });
    }
  );
});






// API: ดึงรายรับรายเดือน/ปี
app.get('/api/revenue', (req, res) => {
  const { startDate, endDate, roomType } = req.query;

  let query = `
    SELECT 
      SUM(total_price) AS totalRevenue, 
      DATE_FORMAT(check_in_date, '%Y-%m') AS monthYear, 
      room_type 
    FROM bookings
    JOIN rooms ON bookings.room_number = rooms.room_number
    WHERE check_in_date BETWEEN ? AND ?
  `;
  
  // Filter by roomType if provided
  if (roomType) {
    query += ' AND room_type = ?';
  }
  
  query += ' GROUP BY monthYear, room_type ORDER BY monthYear DESC';
  
  const queryParams = [startDate, endDate];
  if (roomType) queryParams.push(roomType);

  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Error fetching revenue data:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      res.json(results);
    }
  });
});


// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
