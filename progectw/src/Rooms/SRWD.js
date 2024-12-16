import React from 'react';
import SlideMenu from '../Menu';
import Footer from '../Footer';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const SRWD = () => {
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
      title="Standard Room with Desk"
      details="Sleeps 2  /  587 sq ft"
      description="Offering a private balcony that serves as an ideal vantage point for vibrant sunrises —or for simply taking in the fresh, clean coastal air—this well-appointed room delivers multiple ways to savor your Portland experience. A cozy armchair near the window provides additional views before you give in to the temptation of your lavish king bed and conclude the evening.

"
      
linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footer />
        </div>
    );
};

export default SRWD;