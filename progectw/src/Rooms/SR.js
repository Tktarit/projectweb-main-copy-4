import React from 'react';
import SlideMenu from '../Menu';
import Footer from '../Footer';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const SR = () => {
    const images = [
        '/image/standrad room1.png', // ใส่ path รูปภาพของคุณใน public directory
        '/image/standrad room2.png',
        '/image/standrad room3.png',
        '/image/standrad room4.png',
        '/image/standrad room5.png',
      ];
    return (
        <div style={{backgroundColor: '#f8f3e6'}}>
           <SlideMenu />
           <EachHotelRooms
      type="STANDARD ROOM"
      title="Standard Room"
      details="Sleeps 2  /  587 sq ft"
      description="An oasis of calm among the vibrant energy of Portland, this king room is ideal for those seeking serenity and wellness. As you ease into the thoughtfully chosen armchair or chaise lounge, or perhaps let the water from the spa-inspired bathroom’s rain shower wash over you, you’ll feel a sense of calm and a newfound energy for wherever your journey leads.

"
      
linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footer />
        </div>
    );
};

export default SR;