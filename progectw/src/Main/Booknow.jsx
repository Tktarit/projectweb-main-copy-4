import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../style/Booknow.css';
import Menu from '../Menu';
const Booknow = () => {
  const [rooms, setRooms] = useState([]); // เก็บข้อมูลห้องพักจาก API
  const [filteredRooms, setFilteredRooms] = useState([]); // เก็บข้อมูลห้องพักหลังจากกรอง
  const [roomType, setRoomType] = useState(''); // ประเภทห้องที่เลือก
  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า
  console.log('Room data:', rooms);
  // ดึงข้อมูลห้องพักว่างจาก API
  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const response = await fetch('http://localhost:3000/available-rooms');
        const data = await response.json();
        console.log('Available Rooms:', data); // แสดงข้อมูลใน console
        setRooms(data); // เก็บข้อมูลใน state
        setFilteredRooms(data); // เริ่มต้นแสดงทุกห้อง
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
  
    fetchAvailableRooms();
  }, []);

  // ฟังก์ชันจัดการการกรองห้องพัก
  const handleViewAvailability = (e) => {
    e.preventDefault();
    const filtered = roomType
      ? rooms.filter((room) => room.type.toLowerCase() === roomType.toLowerCase())
      : rooms;
    setFilteredRooms(filtered);
  };

  // ฟังก์ชันเปลี่ยนไปหน้าจอง
  const handleBookRoom = (room) => {
    navigate('/reservation', {
      state: {
        room: {
          id: room.id,
          room_number: room.room_number, // Ensure this field exists
          type: room.type,
          price_per_night: room.price_per_night,
        },
      },
    });
    
    
  };

  return (
    <div className="booking-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <Menu />
      <div>
        <h2 className="booking-header">Book a Room</h2>
        <form onSubmit={handleViewAvailability} className="booking-form">
          
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="">Select Room Type</option>
            <option value="Standard Room">Standard Room</option>
            <option value="Grand Standard Room">Grand Standard Room</option>
            <option value="Suite">Suite</option>
          </select>
          <button type="submit" className="booking-button">
            View Availability
          </button>
        </form>
      </div>
      <div className="form-group">
        <label htmlFor="rooms">Available Rooms</label>
        <div className="room-grid">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div key={room.room_number} className="room-block">
                <img
                  src={`/images/rooms/${room.type.toLowerCase()}.jpg`}
                  alt={room.type}
                  className="room-image"
                />
                <div className="room-details">
                  <h3 className="room-title">{room.type}</h3>
                  <p className="room-capacity">
                    <span>👤 {room.capacity || '2 People'}</span> • <span>📏 {room.size || '30 m²'}</span>
                  </p>
                  <p className="room-description">
                    {room.description || 'A beautifully designed room with all modern amenities.'}
                  </p>
                  <div className="room-price">
                    <span>{room.price_per_night} bath</span>
                    <button
                      className="book-button"
                      onClick={() => handleBookRoom(room)} // ส่งข้อมูลห้อง
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No rooms available for the selected type.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booknow;
