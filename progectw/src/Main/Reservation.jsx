import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import '../style/Reservation.css';

const Reservation = () => {
  const userId = localStorage.getItem('user_id');
  console.log('Retrieved user_id:', userId);  
const token = localStorage.getItem('token');
const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า
const [formData, setFormData] = useState({
  guestName: '', // Add guestName field to handle the guest's name
  // Add other necessary fields if needed
});

// ตรวจสอบว่ามี token หรือไม่
if (!token || !userId) {
  alert('You must be logged in to make a reservation.');
  navigate('/login'); // ถ้าไม่มี token ให้กลับไปที่หน้า Login
}
  const location = useLocation();
  const { room } = location.state;

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [nights, setNights] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(''); // เก็บวิธีการชำระเงินที่เลือก

  const today = new Date();
  const maxBookingDate = new Date(today);
  maxBookingDate.setDate(maxBookingDate.getDate() + 90);

  const generateDateOptions = (start, end) => {
    const options = [];
    const currentDate = new Date(start);
    while (currentDate <= end) {
      options.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return options;
  };

  const dateOptions = generateDateOptions(today, maxBookingDate);

  useEffect(() => {
    async function fetchGuestName() {
      try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setFormData((prevState) => ({ ...prevState, guestName: data.username }));
      } catch (error) {
        console.error('Error fetching guest name:', error);
      }
    }
  
    if (userId && token) {
      fetchGuestName();
    }
  }, [userId, token]);
  
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const inDate = new Date(checkInDate);
      const outDate = new Date(checkOutDate);
      const diffTime = outDate - inDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays > 0 ? diffDays : 0);
    }
  }, [checkInDate, checkOutDate]);
  

  const handleReservation = async (e) => {
    e.preventDefault();
    
    const bookingData = {
      user_id: userId,
      room_number: room.room_number, // Ensure this field is passed from Booknow.jsx
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      total_price: (room.price_per_night * nights* 1.07 ).toFixed(2),
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`, // Token ต้องอยู่ในรูปแบบที่ถูกต้อง
        },
        body: JSON.stringify(bookingData),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert(`Booking confirmed! Your booking ID is ${data.reservationId} ${data.total_price}`);
        console.log('Response Data:', data); // Log ค่าที่ได้จาก Backend
        
        navigate('/QRCodePage', {
          state: {
            bookingId: data.reservationId,
            total: data.total_price,
            
          },
        });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('An error occurred while saving your booking.');
    }
  };
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  
  
  

  return (
    <div className="reservation-page">
      <div className="reservation-container">
        <div className="left-section">
          <h2>Your Reservation</h2>
          <p><strong>{room.type}</strong></p>
          <p>👤 2 Adults • {nights > 0 ? `${nights} Nights` : '1 Night'}</p>
          
          <div className="date-section">
  <div className="date-group">
    <label>Check-In Date:</label>
    <select
      value={checkInDate}
      onChange={(e) => setCheckInDate(e.target.value)}
    >
      <option value="">Select Check-In Date</option>
      {dateOptions.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  </div>

  <div className="date-group">
    <label>Check-Out Date:</label>
    <select
      value={checkOutDate}
      onChange={(e) => setCheckOutDate(e.target.value)}
      disabled={!checkInDate}
    >
      <option value="">Select Check-Out Date</option>
      {dateOptions
        .filter((date) => new Date(date) > new Date(checkInDate))
        .map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
    </select>
  </div>
</div>

          <hr
            style={{
              margin: '20px 0',
              border: 'none',
              borderTop: '2px dashed #ccc',
            }}
          />
          <p>Subtotal: {Number(room?.price_per_night || 0).toLocaleString('en-US')} bath</p>
          <p>Vat: {Number(((room?.price_per_night || 0) * 0.07).toFixed(2)).toLocaleString('en-US')} bath</p>
          <p>
            <strong>
            Total: {Number(((room?.price_per_night || 0) * 1.07 * (nights || 1)).toFixed(2)).toLocaleString('en-US')} bath
            </strong>
          </p>

          <hr
            style={{
              margin: '20px 0',
              border: 'none',
              borderTop: '2px dashed #ccc',
            }}
          />
          {/* กล่องสีดำ */}
          <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '8px', color: 'white' }}>
  <h3>Payment Method</h3>
  <label htmlFor="paymentMethod">Choose Payment:</label>
  <select
    id="paymentMethod"
    value={paymentMethod}
    onChange={(e) => setPaymentMethod(e.target.value)}
    style={{
      width: '100%',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '4px',
      fontSize: '14px',
    }}
    required
  >
    <option value="">Select Payment Method</option>
    <option value="bank_transfer">Bank Transfer</option>
  </select>
</div>
{/* ปุ่มสำหรับการจอง */}
<button
  type="button"
  onClick={handleReservation}
  className="submit-button"
>
  Book Now
</button>

        
  
  
    
    
  </div>
</div>

      </div>
   
  );
};

export default Reservation;
