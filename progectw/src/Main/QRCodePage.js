import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import generatePayload from 'promptpay-qr';
import Menu from '../Menu';
const QRCodePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total, bookingId } = location.state || {};
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 นาที
  console.log('Location State:', location.state);
  useEffect(() => {
    // ตรวจสอบว่า reservationId และ total มีค่าหรือไม่
    if (!bookingId || !total) {
      navigate('/Booknow'); // หากไม่มีข้อมูล ให้กลับไปหน้าจอง
      return;
    }

    // ตั้งสถานะว่า QR Code กำลังใช้งานอยู่
    sessionStorage.setItem('qrActive', 'true');

    // เริ่มนับถอยหลัง
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          sessionStorage.removeItem('qrActive'); // ล้างสถานะเมื่อหมดเวลา
          alert('Time is up! Redirecting to the Booking page.');
          navigate('/Booknow'); // เวลาหมด กลับไปหน้าจอง
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      sessionStorage.removeItem('qrActive'); // ล้างสถานะเมื่อออกจากหน้า
    };
  }, [navigate, bookingId, total]);

  useEffect(() => {
    // ตรวจสอบสถานะ QR Code หากไม่มี ให้กลับไปหน้า Bookingnow
    if (sessionStorage.getItem('qrActive') !== 'true') {
      navigate('/Booknow');
    }
  }, [navigate]);

  // แปลงเวลานับถอยหลังเป็นนาทีและวินาที
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // หมายเลข PromptPay และข้อมูล QR Code
  const promptPayID = '4380163873';
  const amount = parseFloat(total || 0);
  const qrCodeValue = generatePayload(promptPayID, { amount });

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Menu />
      <h2>Payment via QR Code</h2>
      <p>Total Amount: {Number(amount.toFixed(2)).toLocaleString('en-US')} bath</p>
      <p>Reservation ID: {bookingId}</p>
      <QRCodeCanvas value={qrCodeValue} size={256} />
      <p>Please scan this QR Code to complete your payment.</p>
      <p style={{ fontSize: '18px', color: timeLeft > 0 ? 'black' : 'red' }}>
        Time Remaining: {formatTime(timeLeft)}
      </p>
    </div>
  );
};

export default QRCodePage;
