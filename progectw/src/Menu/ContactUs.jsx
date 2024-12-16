import React from 'react';
import Footer from '../Footer';
import SlideMenu from '../Menu';
const ContactUs = () => {
  return (
    <div>
        <SlideMenu />
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f8f3e6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
         CONTACT US
      </h1>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingRight: '2rem',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            CyberVista Hotel
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '1rem' }}>
            มหาวิทยาลัยนครพริเวตโฮเทล 63 หมู่ 7<br />
            ต.อาจรักษ์ อ.องค์รักษ์ จ.นครนายก
          </p>
          <p style={{ fontSize: '14px', marginBottom: '1rem' }}>
            📞 0XX-XXX-XXXX<br />
            ✉️ CyberVistaHotel@gmail.com
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ fontSize: '20px' }}>📷</a>
            <a href="#" style={{ fontSize: '20px' }}>📘</a>
            <a href="#" style={{ fontSize: '20px' }}>▶️</a>
            <a href="#" style={{ fontSize: '20px' }}>📺</a>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: '2rem',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            GENERAL INQUIRIES
          </h2>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input
                type="text"
                placeholder="First"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <input
                type="text"
                placeholder="Last"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <textarea
              placeholder="Message"
              style={{
                width: '100%',
                height: '100px',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                resize: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#4a3f35',
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
            
    </div>
    <Footer />  
    </div>
  );
};

export default ContactUs;
