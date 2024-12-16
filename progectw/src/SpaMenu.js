import React from 'react';
import LeftPicNoButton  from './LeftPicNoButton';
import Footer   from './Footer';
import TREATMENTSMENU from './TREATMENTSMENU';
import FeaturedTreatment from './FeaturedTreatment';
const SpaMenu = () => {
    
    
    return (
        <div>
              
        <TREATMENTSMENU
         menuTitle="SPA MENU"
         subtitle="All treatments at Astraea are available for couples. Simply reserve two massages or treatments at the same time and write us a note in your reservation that you would like to have it be a couples' experience. We'll take care of the rest!" />
          
         <div style={{ borderBottom: '1px solid #999',margin: '10px 0',width:'80%',justifySelf:'center'}}></div>
         <FeaturedTreatment
        featuredTitle="FEATURED TREATMENT"
        sessionTitle="GROUNDING EARTH SESSION"
        duration="60 MINUTES"
        price="$145"
        highlights="guided breathwork • face & scalp massage • foot massage"
        description="Reconnect with your inner self and find solace amidst the hustle and bustle of modern life with our Grounding Earth Session. This grounding ritual begins with a guided breathwork journey that encourages you to slow down and reconnect with your breath. Once settled on the massage table, a pressure point face and scalp massage gently eases away stress, allowing you to fully embrace the present moment. A soothing reflex point foot massage completes this ritual, leaving you feeling centered and grounded in both body and mind. This treatment is ideal for individuals seeking to slow down and is particularly beneficial for those experiencing menopause and perimenopause, as it facilitates a deeper connection with the body during this transformative phase of life."
      />
      <div style={{ borderBottom: '1px solid #999',margin: '10px 0',width:'80%',justifySelf:'center'}}></div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: 'auto', position: 'relative', }}>
            <div style={{ width: '50%', height: '50%', display: 'flex',flexDirection:'column' }}>
            <p style={{textAlign:'left', margin:'20px'}}>MASSAGE</p>
            <FeaturedTreatment
            descriptionWidth='80%'
        
        sessionTitle="ASTRAEA SIGNATURE MASSAGE"
        duration="90 MINUTES"
        price="$200"
        highlights="intention setting • hot towels • warm salt stones • massage"
        description="Embark on our Signature Massage experience, beginning with our meditation stone intention setting to guide you towards a state of inner harmony and mindfulness.
For the next 90 minutes, our skilled massage therapists will provide a fusion of techniques, starting with the warming touch of infused hot towels to prepare your body for the ultimate treatment.  
Feel the warmth of salt stones glide along your body, releasing deep-seated stress and promoting a sense of profound calm.   
The journey continues with a blissful full-body massage, tailored to your preferences and designed to alleviate muscle tightness and promote overall well-being. Your face will receive a luxurious massage, leaving you with a radiant glow and a renewed sense of vitality.    Experience Astraea’s Signature Massage – an unforgettable journey designed to elevate your well-being and leave you feeling truly radiant.   "
      />
            </div>
            <div style={{ width: '50%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4ecdc4', color: 'white', fontWeight: '' }}>
            <FeaturedTreatment
            descriptionWidth='80%'
       
        sessionTitle="NEOLIFTING© FACIAL MASSAGE"
        duration="90 MINUTES"
        price=" $235"
        highlights="intention setting • hot towels • warm salt stones • massage"
        description="We believe in embracing the privilege of aging and are excited to help you celebrate your beauty with this natural treatment. Through sculpting massage and buccal techniques, we work to bring the muscles in your face back to their healthy tone. After just one session, you’ll experience glowing skin, reduced facial tension, less wrinkles, a more defined jaw line, and a significant confidence boost! These benefits continue to grow with regular sessions. While this treatment has gained popularity worldwide, we are thrilled to introduce it to Maine as the first and only LMTs certified in NeoLifting© facial massage techniques.   
Please note, we are Licensed Massage Therapists, not Estheticians. We will not be cleansing or treating your skin – we focus on optimizing your facial muscles, enhancing lymph drainage, and promoting natural improvement of your skin from within. You can come make-up free or wash your face with our VOYA products before your treatment begins.   "
      />
            </div>
            <div style={{ width: '50%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a535c', color: 'white', fontWeight: '' }}>
            <FeaturedTreatment
            descriptionWidth='80%'
       
        sessionTitle="HERBAL COMPRESS MASSAGE"
        duration="90 MINUTES"
        price="$200"
        highlights="herbal compress • full body massage"
        description="This treatment serves as a potent remedy for tired muscles and a nurturing massage during sensitive times such as PMS, or whenever you need a little extra TLC. Throughout the session, herbal compresses infused with orange, clove, ginger, and Fucus Serratus seaweed are gently steamed and massaged into your body, releasing precious gel from the seaweed. This gel contains properties that promote tissue renewal and reduce inflammation, while also serving as an emollient, softening the skin. The warm gel forms a protective layer on your skin, minimizing moisture loss through evaporation and keeping you deeply hydrated. The rhythmic massage of this treatment is both invigorating and soothing, leaving you feeling relaxed, aligned, and nourished from within.   "
      />
            </div>
            <div style={{ width: '50%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe66d', color: 'white', fontWeight: '' }}>
            <FeaturedTreatment
            descriptionWidth='80%'
        
        sessionTitle="MINDFUL DREAMS"
        duration="60/90 MINUTES"
        price="$145/185$"
        highlights="meditation stones • rhythmic full body massage"
        description="Prepare yourself for a restorative night’s sleep with our Mindful Dreams treatment. This sleep-inducing experience begins with an invitation to practice mindful breathing accompanied by rose quartz meditation stones. You’ll enjoy a rhythmic Hawaiian and Balinese-inspired body massage and a blissful face and scalp massage to encourage a deep state of calm.
"
      />
            </div>
        </div>
        <div style={{ borderBottom: '1px solid #999',margin: '10px 0',width:'80%',justifySelf:'center'}}></div>
        <FeaturedTreatment
        featuredTitle="MAMA-TO-BE TREATMENTS"
        sessionTitle="PRENATAL MASSAGE"
        duration="60 MINUTES"
        price="$145"
        highlights="customized massage"
        description="A therapeutic massage designed specifically for the Mama-to-be to help ease the discomforts of growing a human. With a pregnancy pillow in place, you’ll be able to lie face down, safely and comfortably and enjoy this profoundly nurturing experience. Prenatal massages can easily be tailored to address your individual needs and can provide additional focus for your comfort and well-being.    "
      />
      <div style={{ borderBottom: '1px solid #999',margin: '10px 0',width:'80%',justifySelf:'center'}}></div>
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
          fontWeight: '',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        SAUNA
      </h1>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          width: '80%',
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontWeight: '',
              marginBottom: '0.5rem',
            }}
          >
            PRIVATE INFRARED SAUNA SUITE
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'normal',
              marginBottom: '0.5rem',
            }}
          >
            45 MINUTES | $65
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#555',
            }}
          >
            hot - cold - shower
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontWeight: '',
              marginBottom: '0.5rem',
            }}
          >
            PRIVATE INFRARED SAUNA SUITE
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'normal',
              marginBottom: '0.5rem',
            }}
          >
            60 MINUTES | $75
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#555',
            }}
          >
            hot - cold - rest - shower
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontWeight: '',
              marginBottom: '0.5rem',
            }}
          >
            PRIVATE INFRARED SAUNA SUITE
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'normal',
              marginBottom: '0.5rem',
            }}
          >
            90 MINUTES | $110
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#555',
            }}
          >
            hot - cold - rest - repeat - shower
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontWeight: '',
              marginBottom: '0.5rem',
            }}
          >
            PRIVATE INFRARED SAUNA SUITE
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'normal',
              marginBottom: '0.5rem',
            }}
          >
            120 MINUTES | $150
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#555',
            }}
          >
            hot - cold - rest - repeat as desired - shower
          </p>
        </div>
      </div>
    </div>
    
    <div style={{ borderBottom: '1px solid #999',margin: '10px 0',width:'80%',justifySelf:'center'}}></div>
    <p style={{textAlign:'left',margin:'20px'}}>SAUNA</p>
    <div style={{display:'flex', width: '100%', height: '100vh', position: 'relative',}}>
    <div style={{ width: '50%', height: '50%', display: 'flex',   fontWeight: '',flexDirection:'column' }}>
    <FeaturedTreatment 
    descriptionWidth='80%'
    sessionTitle="MICRO-MEDITATION EXPERIENCE"
    duration="30 MINUTES"
    price="$35"
    description="Our amazing meditation loungers have been proven to have dramatic positive effects on stress & anxiety levels and overall mood state. Our wellness coordinator will help you choose which session is right for you whether you are looking for a nervous system reset, a mid-day boost or a little nap. Noise-dampening headphones eliminate outside distractions, and a weighted blanket & eye pillow is provided for a completely immersive experience. Vibro-acoustic sound waves & scientifically composed music soothes and re-routes neural pathways quieting brain activity. Afterward, enjoy a cup of tea & a few moments to absorb the benefits of your meditation in our spa lounge."
    />
    </div>
    <div style={{ width: '50%', height: '50%', display: 'flex',   fontWeight: '',flexDirection:'column' }}>
    <FeaturedTreatment 
    descriptionWidth='80%'
    sessionTitle="DEEP SLEEP MEDITATION"
    duration="60 MINUTES"
    price="$65"
    description="Experience deep rest in our zero gravity meditation loungers designed to reduce stress & anxiety levels and enhance restorative sleep states. This 60 minute enhanced sleep meditation combines clinically tested, vibro-acoustic sound therapy with perfect zero gravity positioning for accelerated guest restoration. Combined with a weighted blanket & eye pillow, this sleep session will prepare you for an uninterrupted, deep sleep."
    />
    </div>
    </div>
    <LeftPicNoButton
            title="SPA DETAILS:"
            title2="WHAT’S INCLUDED"
            description="Every Astraea treatment includes access to our Spa Lounge before and after your treatment. Enjoy a soothing cup of tea, some healthy snacks, and a few more minutes just for yourself.
Tips
Please silence or turn off your phone when entering Astraea—it is the best way to truly be present during your experience.
Drink plenty of water before and after your treatment to stay well-hydrated.
Communicate any preferences or needs with your massage therapist at the beginning of your treatment so they can tailor the experience specifically to you."
            imgSrc="/image/bgmain.jpg"
        />
<Footer />
        </div>
    );
};

export default SpaMenu;