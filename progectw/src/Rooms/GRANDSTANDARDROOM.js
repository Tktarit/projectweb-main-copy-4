import React from 'react';
import HotelRooms from '../HotelRooms';
import Footer from '../Footer';
const GRANDSTANDARDROOM = () => {
    const rooms = [
        {
          image: '/image/GRAND STANDARD ROOM.png', // URL รูปภาพห้อง
          title: 'Grand Standard Room',
          details: 'Sleeps 2 / 587 sq ft',
          description:
            'Elevate your Portland visit with this ideal blend of opulence and comfort, highlighted by a thoughtful layout that invites relaxation.',
            description2: '/GSR',
          onBookRoom: () => alert('Booking Grand Standard Room'),
        },
        {
          image: '/image/GRAND STANDARD ROOM WITH BACK COVE VIEWS.png', // URL รูปภาพห้อง
          title: 'Grand Standard Room with Back Cove Views',
          details: 'Sleeps 2 / 500 sq ft',
          description:
            'With elegant touches throughout paired with striking views of the Back Cove, this room is a true escape.',
            description2: '/GSRWB',
          onBookRoom: () => alert('Booking Grand Standard Room with Back Cove Views'),
        },
      ];
    return (
        <div>
        <HotelRooms
      title="Your Respite in the City"
      subtitle="Grand Standard Room"
      rooms={rooms}
    />
        <Footer />
        </div>
    );
};

export default GRANDSTANDARDROOM;