import React from 'react';
import HeroSection from './HeroSection';
import LeftPicNoButton  from './LeftPicNoButton';
import Footer   from './Footer';
import RightPicSpa from './RightPicSpa';
import LeftPicSpa from './LeftPicSpa';
import { Link } from 'react-router-dom';
const MEDITATION = () => {
    return (
        <div>
               <HeroSection
        title="ASTRAEA"
        subtitle="A WELLNESS SPA"
        mainText="A POWERFUL "
        mainText2="WAY TO MEDITATE"
        description="The benefits of meditation are well-known—it can reduce stress and anxiety, improve memory and mood, lower blood pressure, even strengthen the immune system. Astraea’s Meditation Loungers allow you to take your meditation experience to an even deeper level by reducing distractions and easing you into your meditative state with vibroacoustics. This immersive experience is designed to help you quickly and completely enter a state of total calm.

"
      />
      <RightPicSpa 
         title="MEDITATION"
         title2="LOUNGERS"
        middle1="01"
        middle2="CHOOSE YOUR MEDITATION OPTIONS"
         description="Whether you need a neo-nap, a reset, or a wind-down before bed, we have the perfect option, and our Wellness Coordinators are here to guide your choice."
         imgSrc="/image/spa41.png"
        />
        <LeftPicSpa
    
   middle1="02"
   middle2="GET COMFORTABLE"
    description="Astraea's Wellness Coordinator will help you get comfortable in the Meditation Lounger and you'll put on the noise-cancelling headphones.
We’ll cover you in a weighted blanket and place a weighted mask over your eyes—all you have to do is get comfortable and enjoy."
        imgSrc="/image/spa42.png"
/>
<RightPicSpa 
         
        middle1="03"
        middle2="MEDITATION"
         description="A guided meditation or calming music (depending on your chosen session) will ease you in, as the vibroacoustics—the lounger vibrating along with the music—calms your nervous system and leads you right into your meditation.
"
        imgSrc="/image/spa43.png"
/>
        <LeftPicSpa
    
    middle1="04"
    middle2="EMERGENCE"
     description="You’ll emerge with a greater sense of calm and well-being.
We invite you to take some time in our Spa Lounge to enjoy a warm cup of tea before easing back into your day or evening."
    imgSrc="/image/spa44.png"
/>
<div style={{ textAlign: 'center', margin: '20px 0' }}>
<Link to="/Booknow">
    <button className='astraea-border-button' style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer',width:'20%' }}>
        Book Now
    </button>
    </Link>
</div>

<LeftPicNoButton
            title="CyberVista"
            description="CyberVista Hotel feels both elevated and familiar, with refined guestrooms and suites, a wealth of thoughtful amenities, and enhancements crafted to make your experience unforgettable."
            imgSrc="/image/spa45.png"
            />
<Footer />
        </div>
    );
};

export default MEDITATION;