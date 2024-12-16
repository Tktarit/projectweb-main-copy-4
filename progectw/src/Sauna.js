import React from 'react';
import HeroSection from './HeroSection';
import LeftPicNoButton  from './LeftPicNoButton';
import Footer   from './Footer';
const Sauna = () => {
    return (
        <div>
             <HeroSection
        title="ASTRAEA"
        subtitle="A WELLNESS SPA"
        mainText="FEEL THE HEAT—"
        mainText2="AND RELISH THE COLD"
        description="Astraea’s unique hot-cold infrared sauna experience is backed by more than ancient traditions—there’s science behind it all. The hot - cold cycle can improve circulation, reduce muscle soreness and joint pain, and even help you relax, as increased blood flow also releases endorphins.
"
      />
       <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
        backgroundColor: '#f8f3e6',
      }}
    >
      {/* Text Section */}
      <div
        style={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Centers the entire block horizontally
        }}
      >
        {/* Infrared Sauna Benefits */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textAlign: 'left',
            }}>
          <h3>BENEFITS OF </h3>
            <h3>INFRARED SAUNA</h3>
          
          </div>
         
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              lineHeight: '1.8',
              fontSize: '16px',
              textAlign: 'left', // Aligns text inside the list to the left
            }}
          >
            <li>Boosts circulation</li>
            <li>Soothes sore muscles</li>
            <li>Eases joint pain and stiffness</li>
            <li>Promotes better sleep</li>
            <li>Lowers stress levels</li>
            <li>Boosts immunity</li>
            <li>Aids in detoxification</li>
            <li>Provides pain relief</li>
          </ul>
        </div>

        {/* Cold Shower Benefits */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textAlign: 'left',
            }}>
          <h3>BENEFITS OF THE</h3>
            <h3>COLD SHOWER</h3>
          
          </div>
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              lineHeight: '1.8',
              fontSize: '16px',
              textAlign: 'left', // Aligns text inside the list to the left
            }}
          >
            <li>Reduces inflammation</li>
            <li>Improves circulation</li>
            <li>Lowers stress levels</li>
            <li>Provides pain relief</li>
            <li>Eases sore muscles</li>
            <li>Eases fatigue</li>
            <li>Gives you glowing hair and skin</li>
          </ul>
        </div>
      </div>

      {/* Colored Section */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#a56464',
        }}
      ></div>
    </div>
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
      {/* Header */}
      <h1
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          margin: '0 0 1rem',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Sauna Menu
      </h1>
      <hr
        style={{
          width: '80%',
          border: 'none',
          borderTop: '1px solid #000',
          marginBottom: '2rem',
        }}
      />
      {/* Subtitle */}
      <h2
        style={{
          fontSize: '20px',
          fontWeight: '500',
          margin: '0 0 2rem',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Private Infrared Sauna Suite
      </h2>
      {/* Menu Options */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Option 1 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            45 MINUTES <span style={{ color: '#c50' }}>$65</span>
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
            hot – cold – shower
          </p>
        </div>
        {/* Option 2 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            60 MINUTES <span style={{ color: '#c50' }}>$75</span>
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
            hot – cold – rest – shower
          </p>
        </div>
        {/* Option 3 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            90 MINUTES <span style={{ color: '#c50' }}>$110</span>
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
            hot – cold – rest – repeat – shower
          </p>
        </div>
        {/* Option 4 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            120 MINUTES <span style={{ color: '#c50' }}>$150</span>
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
            hot – cold – rest – repeat as desired – shower
          </p>
        </div>
      </div>
    </div>
    <LeftPicNoButton
            title="SAUNA DETAILS:"
            title2="WHAT’S INCLUDED"
            description="When you reserve a sauna you are reserving a private lounge, with your infrared sauna, real rain shower, tea station with snacks, a relaxation area and a bathroom. Think your new favorite date night spot or a blissful solo retreat. We can't wait to welcome you.
Tips
Please silence or turn off your phone when entering Astraea—it is the best way to truly be present during your experience.
Drink plenty of water before and after your treatment to stay well-hydrated.
Take breaks whenever you need to. If you feel too hot - have a cold shower, rest, hydrate and go back to the sauna when you are ready. This is your journey - there is no right way, just the way that's best for you."
            

            imgSrc="/image/spa32.png"
        />
        <Footer />
        </div>
    );
};

export default Sauna;