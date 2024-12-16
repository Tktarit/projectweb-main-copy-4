import React from 'react';
import SlideMenu from '../Menu';
import Footer from '../Footer';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const GSR = () => {
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
      title="Grand Standard Room"
      details="Sleeps 2  /  587 sq ft"
      description="Elevate your Portland visit with this ideal blend of opulence and comfort, highlighted by a thoughtful layout that invites relaxation. Sink into the cozy TRNK chaise lounge and armchair and relive the day’s adventures—or gather around the coffee table to plan what’s ahead, perhaps with a snack from Twinflower Café or a nightcap from Five of Clubs. A rainfall shower adds an additional sense of calm before 
"
      extendedDescription="climbing into the plush king-sized bed for the best sleep you’ve ever had.
Third-floor Standard King Rooms are pet-friendly (additional charge of $50 per night)."
linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footer />
        </div>
    );
};

export default GSR;