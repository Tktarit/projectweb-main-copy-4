import React from 'react';
import SlideMenu from '../Menu';
import Footer from '../Footer';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const GSRWB = () => {
    const images = [
        'image/grand standrad room 1.png', // ใส่ path รูปภาพของคุณใน public directory
        'image/grand standrad room 2.png',
        'image/grand standrad room 3.png',
        'image/grand standrad room 4.png',
        'image/grand standrad room 5.png',
      ];
    return (
        <div style={{backgroundColor: '#f8f3e6'}}>
           <SlideMenu />
           <EachHotelRooms
      type="GRAND STANDARD ROOM"
      title="GRAND STANDARD ROOM WITH BACK COVE VIEWS"
      details="Sleeps 2  /  587 sq ft"
      description="With elegant touches throughout paired with striking views of the Back Cove, this room is a true escape. An inviting king-sized bed is the centerpiece, but you’ll also discover a spa-inspired bathroom with a relaxing rainfall shower featuring premium Grown Alchemist products. A charming TRNK chaise lounge, armchair, and table provide space to gather and unwind—perfect for morning coffee, evening nightcaps, or bites from Twinflower Café or Five of Clubs as you look out over the water.

"
      
linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footer />
        </div>
    );
};

export default GSRWB;