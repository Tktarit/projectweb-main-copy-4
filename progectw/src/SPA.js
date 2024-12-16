import React, { useState } from 'react'; // เพิ่ม useState
import RightPicWithButton from './RightPicWithButton';
import Semetry from './Semetry';
import LeftPicWithButton from './LeftPicWithButton';
import SpaFeelingsSection from './SpaFeelingsSection';
import Footer from './Footer';
import HeroSection from './HeroSection';

function SPA({ setActiveSection }) {
    const buttons = [
        { text: 'BOOK NOW', path: '/Booknow' },
    ];
    const button2 = [
        { text: 'BOOK NOW', path: '/Booknow' },
    ];
    

    return (
        <div>
            <HeroSection
                title="ASTRAEA"
                subtitle="A WELLNESS SPA"
            />
            <RightPicWithButton
                description="We created Astraea to be a place where you can take a deep breath and be fully supported on your wellness journey. Whether you are here for a sauna date night, a lunch break reset on our meditation lounger, a massage or a full spa day we have curated experiences to calm your senses, hydrate your skin, find connection with your body, release chronic tension, gain confidence and so much more. They're experiences that will leave a lasting impression, providing benefits that will stay with you long after you leave."
                imgSrc="/image/spa.png"
                buttons={buttons}
            />
            {/* ส่ง setActiveSection ไปยัง Semetry */}
            <Semetry setActiveSection={setActiveSection} />
            <LeftPicWithButton
                title="MEDITATION"
                description="Our meditation room features one of our favorite offerings in the spa, 
                our Meditation Loungers. This technology has been used to treat PTSD and 
                addiction and has recently been making its way into the spa world. 
                The loungers remove distractions and allow you to melt into a meditation 
                practice quickly and easily, leading to unprecedented levels of relaxation. 
                When you're short on time but in need of a reset, a 20-minute session in the 
                meditation room is the perfect solution."
                imgSrc="/image/spa3.png"
                buttons={button2}
            />
            <SpaFeelingsSection />
            <Footer />
        </div>
    );
}

export default SPA;
