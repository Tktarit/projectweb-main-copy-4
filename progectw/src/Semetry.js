import React from 'react';

function Semetry({ setActiveSection }) {
  
  return (
    <div
      className="connten"
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        height: 'auto',
        padding: '40px',
        backgroundColor: '#f8f3e6', // สีพื้นหลังเหมือนรูปตัวอย่าง
      }}
    >
      {/* Left Section */}
      <div
        className="leftyy"
        style={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '600px', // จำกัดความกว้างของคอลัมน์
          padding: '20px',
        }}
      >
        <img
          src="/image/spa1.png"
          alt="Treatments"
          style={{
            width: '400px',
            height: '300px',
            objectFit: 'cover',
            marginBottom: '20px', // เพิ่มระยะห่างใต้รูป
          }}
        />
        <div>
          <p
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            TREATMENTS
          </p>
        </div>
        <p
          style={{
            width: '100%',
            fontSize: '16px',
            wordWrap: 'break-word',
            textAlign: 'justify', // จัดข้อความแบบ justify
            lineHeight: '1.6',
            marginBottom: '20px', // ระยะห่างจากปุ่ม
          }}
        >
          Customized massages tailored to your needs, rituals for sleep and
          connection. Our treatment menu is full of opportunities to connect and
          recover. Try a sleep-encouraging ritual like our Mindful Dreams, a
          rhythmic full-body massage (the perfect option just before a cozy night
          staying in a guest room at The Longfellow), an invigorating and
          nourishing full-body Seaweed Leaf Wrap or bring back your natural glow
          with a NeoLifting© Facial Massage.
        </p>
        <div style={{height:'30%',width:'80%'}}>
        <button
          className='astraea-border-button'
          onClick={() => setActiveSection('SPA TREATMENTS')}
          // style={{
          //   backgroundColor: '#FFD700', // สีเหลืองของปุ่ม
          //   color: '#000', // สีข้อความในปุ่ม
          //   padding: '10px 20px',
          //   border: 'none',
          //   fontSize: '16px',
          //   fontWeight: 'bold',
          //   textTransform: 'uppercase',
          //   borderRadius: '5px',
          //   cursor: 'pointer',
          // }}
        >
          SPA TREATMENTS
        </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="rightyyy"
        style={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '600px', // จำกัดความกว้างของคอลัมน์
          padding: '20px',
        }}
      >
        <img
          src="/image/spa2.png"
          alt="Sauna"
          style={{
            width: '400px',
            height: '300px',
            objectFit: 'cover',
            marginBottom: '20px', // เพิ่มระยะห่างใต้รูป
          }}
        />
        <div>
          <p
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            SAUNA
          </p>
        </div>
        <p
          style={{
            width: '100%',
            fontSize: '16px',
            wordWrap: 'break-word',
            textAlign: 'justify', // จัดข้อความแบบ justify
            lineHeight: '1.6',
            marginBottom: '20px', // ระยะห่างจากปุ่ม
          }}
        >
          Our private infrared sauna suites are a great way to experience the
          time-tested ritual of hot + cold + rest + repeat with a range of
          benefits from pain relief to better sleep. Each sauna suite comes with
          your own private infrared sauna, uniquely designed to heal and detoxify
          by combining infrared light with chromotherapy, a private rain shower
          with the ability to create a deluge of cold water at the press of a
          button, a private relaxation area with hydrating beverages and
          nourishing snacks, and a private bathroom where you can freshen up and
          re-apply your makeup before continuing on with your day.
        </p>
        <div style={{height:'30%',width:'80%'}}>
        <button
          className='astraea-border-button'
          onClick={() => setActiveSection('SAUNA')}
          // style={{
          //   backgroundColor: '#FFD700', // สีเหลืองของปุ่ม
          //   color: '#000', // สีข้อความในปุ่ม
          //   padding: '10px 20px',
          //   border: 'none',
          //   fontSize: '16px',
          //   fontWeight: 'bold',
          //   textTransform: 'uppercase',
          //   borderRadius: '5px',
          //   cursor: 'pointer',
          // }}
        >
          SAUNA EXPERIENCE
        </button>
        </div>
      </div>
    </div>
  );
}

export default Semetry;
