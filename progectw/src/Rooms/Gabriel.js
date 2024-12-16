import React from 'react';
import SlideMenu from '../Menu';
import Footer from '../Footer';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const Gabriel = () => {
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
      title="Gabriel Suite"
      details="Sleeps 2  /  587 sq ft"
      description="A perfect reflection of this charming and historic city, the warm and inviting Gabriel Suite allows you to pause and fully immerse yourself in the Portland experience. The lounging area provides plenty of space to kick your feet up and relax on the soft, comfortable TRNK chaise lounge and armchair, perhaps unwinding with a favorite book and a cup of local coffee while taking in the views. Cloud-like comfort awaits in the bedroom, which beckons with its Mattress Concierge king bed, premium linens and pillows, and the promise of deep, restorative sleep.
"
      extendedDescription="As you slip into the freestanding soaking tub in your large, luxurious bathroom, and the hydrotherapy jets begin to work on your muscles, you’ll be enveloped by a unique blend of tranquility and rejuvenation—an invigorating sensation that mirrors The Longfellow experience in its entirety."
      linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footer />
        </div>
    );
};

export default Gabriel;