import React from 'react';
import { useNavigate } from 'react-router-dom';

const HotelRooms = ({ title, subtitle, rooms }) => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f8f3e6',
      padding: '2rem',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      margin: '0',
    },
    subtitle: {
      fontSize: '18px',
      margin: '0.5rem 0',
      fontWeight: '500',
      textTransform: 'uppercase',
      width: '60%',
    },
    roomGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      marginTop: '2rem',
    },
    roomCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      padding: '1rem',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    roomTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '1rem 0 0.5rem',
    },
    roomDetails: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '1rem',
    },
    roomDescription: {
      fontSize: '14px',
      marginBottom: '1.5rem',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '14px',
      fontWeight: 'bold',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '0.5rem',
    },
    viewDetailsButton: {
      backgroundColor: '#4a3f35',
      color: '#fff',
    },
    bookRoomButton: {
      backgroundColor: '#fff',
      color: '#4a3f35',
      border: '1px solid #4a3f35',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>{title}</h1>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              borderBottom: '1px solid #999',
              margin: '10px 0',
              width: '100%',
              justifySelf: 'center',
            }}
          ></div>
          <p style={styles.subtitle}>{subtitle}</p>
          <div
            style={{
              borderBottom: '1px solid #999',
              margin: '10px 0',
              width: '100%',
              justifySelf: 'center',
            }}
          ></div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div style={styles.roomGrid}>
        {rooms.map((room, index) => (
          <div key={index} style={styles.roomCard}>
            <img src={room.image} alt={room.title} style={styles.image} />
            <h2 style={styles.roomTitle}>{room.title}</h2>
            <p style={styles.roomDetails}>{room.details}</p>
            <p style={styles.roomDescription}>{room.description}</p>

            {/* ปุ่ม View Details */}
            <button
              style={{ ...styles.button, ...styles.viewDetailsButton }}
              onClick={() => navigate(room.description2)}
            >
              View Details
            </button>

            {/* ปุ่ม Book Room */}
            <button
              style={{ ...styles.button, ...styles.bookRoomButton }}
              onClick={() => navigate('/Booknow' )}
            >
              Book Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelRooms;
