import React from 'react';
import { useNavigate } from 'react-router-dom';

const EachHotelRooms = ({ type, title, details, description, extendedDescription, linkTo }) => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  const handleButtonClick = () => {
    navigate(linkTo); // นำทางไปยังหน้าที่ระบุ
  };

  const styles = {
    container: {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#f8f3e6',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      height: '100vh',
    },
    type: {
      fontSize: '16px',
      textTransform: 'uppercase',
      color: '#333',
      marginBottom: '0.5rem',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      margin: '0.5rem 0',
    },
    details: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '1.5rem',
    },
    description: {
      fontSize: '16px',
      color: '#333',
      lineHeight: '1.8',
      marginBottom: '1.5rem',
    },
    extendedDescription: {
      fontSize: '16px',
      color: '#333',
      lineHeight: '1.8',
      marginBottom: '2rem',
    },
    button: {
      display: 'inline-block',
      padding: '0.75rem 1.5rem',
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: '#4a3f35',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textTransform: 'uppercase',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.type}>{type}</p>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.details}>{details}</p>
      <p style={styles.description}>{description}</p>
      <p style={styles.extendedDescription}>{extendedDescription}</p>
      <button style={styles.button} onClick={handleButtonClick}>
        Book Room
      </button>
    </div>
  );
};

export default EachHotelRooms;
