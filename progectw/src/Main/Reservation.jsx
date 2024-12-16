import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/Reservation.css';

const Reservation = () => {
  const userId = localStorage.getItem('user_id');
  console.log('Retrieved user_id:', userId);
  const token = localStorage.getItem('token');
  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า

  const todayDate = new Date().toISOString().split('T')[0];
  const getMinCheckOutDate = (checkInDate) => {
    if (!checkInDate) return todayDate;
    const minDate = new Date(checkInDate);
    minDate.setDate(minDate.getDate() + 1);
    return minDate.toISOString().split('T')[0];
  };

  const [newBooking, setNewBooking] = useState({
    check_in_date: '',
    check_out_date: '',
  });

  const location = useLocation();
  const { room } = location.state;

  const [nights, setNights] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(''); // เก็บวิธีการชำระเงินที่เลือก

  useEffect(() => {
    if (newBooking.check_in_date && newBooking.check_out_date) {
      const inDate = new Date(newBooking.check_in_date);
      const outDate = new Date(newBooking.check_out_date);
      const diffTime = outDate - inDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays > 0 ? diffDays : 0);
    }
  }, [newBooking]);

  const handleReservation = async (e) => {
    e.preventDefault();

    const bookingData = {
      user_id: userId,
      room_number: room.room_number, // Ensure this field is passed from Booknow.jsx
      check_in_date: newBooking.check_in_date,
      check_out_date: newBooking.check_out_date,
      total_price: (room.price_per_night * nights * 1.07).toFixed(2),
    };

    try {
      const response = await fetch('http://localhost:3000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Booking confirmed! Your booking ID is ${data.reservationId}`);
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

  return (
    <div className="reservation-page">
      <div className="reservation-container">
        <div className="left-section">
          <h2>Your Reservation</h2>
          <p>
            <strong>{room.type}</strong>
          </p>
          <p>👤 2 Adults • {nights > 0 ? `${nights} Nights` : '1 Night'}</p>

          <div className="date-section">
            <label>
              Check-In Date:
              <input
                type="date"
                value={newBooking.check_in_date}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, check_in_date: e.target.value })
                }
                min={todayDate}
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              />
            </label>
            <label>
              Check-Out Date:
              <input
                type="date"
                value={newBooking.check_out_date}
                onChange={(e) =>
                  setNewBooking({
                    ...newBooking,
                    check_out_date: e.target.value,
                  })
                }
                min={getMinCheckOutDate(newBooking.check_in_date)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              />
            </label>
          </div>

          <hr
            style={{
              margin: '20px 0',
              border: 'none',
              borderTop: '2px dashed #ccc',
            }}
          />
          <p>
            Subtotal: {Number(room?.price_per_night || 0).toLocaleString('en-US')}{' '}
            bath
          </p>
          <p>
            Vat:{' '}
            {Number(
              ((room?.price_per_night || 0) * 0.07).toFixed(2)
            ).toLocaleString('en-US')}{' '}
            bath
          </p>
          <p>
            <strong>
              Total:{' '}
              {Number(
                ((room?.price_per_night || 0) * 1.07 * (nights || 1)).toFixed(2)
              ).toLocaleString('en-US')}{' '}
              bath
            </strong>
          </p>

          <hr
            style={{
              margin: '20px 0',
              border: 'none',
              borderTop: '2px dashed #ccc',
            }}
          />
          <div
            style={{
              backgroundColor: 'lightblue',
              padding: '20px',
              borderRadius: '8px',
              color: 'white',
            }}
          >
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
          <button type="button" onClick={handleReservation} className="submit-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
