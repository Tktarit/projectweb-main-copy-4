import React from 'react';
import HotelRooms from '../HotelRooms';
import Footer from '../Footer';
const StandardRoom = () => {
    const rooms = [
        {
          image: '/image/Standard room.png', // URL รูปภาพห้อง
          title: 'STANDARD ROOM',
          details: 'Sleeps 2  /  587 sq ft',
          description:
            'Thoughtfully designed for relaxation and indulgence, the Evangeline Suite is perfect for unwinding after a day of exploration and discovery.',
            description2: '/SR',
          onBookRoom: () => alert('Booking Grand Standard Room'),
        },
        {
          image: '/image/ACCESSIBLE GRAND STANDARD ROOM.png', // URL รูปภาพห้อง
          title: 'STANDARD ROOM WITH BALCONY',
          details: 'Sleeps 2  /  500 sq ft',
          description:
            'A perfect reflection of this charming and historic city, the warm and inviting Gabriel Suite allows you to pause and fully immerse yourself in the Portland experience.',
            description2: '/SRWD',
            onBookRoom: () => alert('Booking Grand Standard Room with Back Cove Views'),
        },
      ];
    return (
        <div>
        <HotelRooms
      title="Your Respite in the City"
      subtitle="standard room"
      rooms={rooms}
    />
        <Footer />
        </div>
    );
};

export default StandardRoom;