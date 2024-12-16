import React from 'react';
import SlideMenu from '../Menu';
import Footer from '../Footer';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const Evangeline = () => {
    const images = [
        'image/suites1.png', // ใส่ path รูปภาพของคุณใน public directory
        'image/suites2.png',
        'image/suites3.png',
        'image/suites4.png',
        'image/suites5.png',
      ];
    return (
        <div style={{backgroundColor: '#f8f3e6'}}>
           <SlideMenu />
           <EachHotelRooms
      type="Suite"
      title="Evangeline Suite"
      details="Sleeps 2 / 587 sq ft"
      description="Thoughtfully designed for relaxation and indulgence, the Evangeline Suite is perfect for unwinding after a day of exploration and discovery. Elegant and welcoming, and boasting features such as a separate living space with TRNK chaise lounge, dining area, and beautifully designed wet bar, it is a most comfortable foundation for your Portland adventures."
      extendedDescription="The oversized bathroom is a sanctuary of its own, inviting you to let your cares melt away with the calming chromotherapy lighting and the hydrotherapy experience of our freestanding soaking tub. Meanwhile, the spacious bedroom offers additional respite, thanks to a luxury king-sized bed from Mattress Concierge and exquisite linens and pillows—all ensuring a restful night so you’re prepared for what’s ahead."
      linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footer />
        </div>
    );
};

export default Evangeline;