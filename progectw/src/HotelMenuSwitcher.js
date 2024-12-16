import React, { useState } from 'react';
import Suites from './Rooms/Suites';
import GRANDSTANDARDROOM from './Rooms/GRANDSTANDARDROOM';
import StandardRoom from './Rooms/StandardRoom';
const HotelMenuSwitcher = () => {
    const [activeSection, setActiveSection] = useState('SUITES');

    const sections = [
        { title: 'SUITES', content: <Suites /> },
        { title: 'GRAND STANDARD ROOM', content: <GRANDSTANDARDROOM /> },
        { title: 'STANDARD ROOM', content: <StandardRoom /> },
    ];

    const handleMenuClick = (section) => {
        setActiveSection(section);
    };

    const styles = {
        container: {
            backgroundColor: '#000080', // Deep blue background
            color: '#FFD700', // Gold text color
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        menuItem: {
            margin: '0 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: activeSection === 'STANDARD ROOM' ? '#FFD700' : 'white',
            cursor: 'pointer',
            position: 'relative',
        },
        activeDot: {
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'red',
            fontSize: '10px',
        },
        content: {
            padding: '40px',
            fontSize: '24px',
            textAlign: 'center',
            color: '#333',
        },
    };

    return (
        <div>
            {/* Menu Bar */}
            <div style={styles.container}>
                {sections.map((section) => (
                    <div
                        key={section.title}
                        style={{
                            ...styles.menuItem,
                            color: activeSection === section.title ? '#FFD700' : 'white',
                        }}
                        onClick={() => handleMenuClick(section.title)}
                    >
                        {activeSection === section.title && <span style={styles.activeDot}>•</span>}
                        {section.title}
                    </div>
                ))}
            </div>

            {/* Displayed Content */}
            <div style={styles.content}>
                {sections.find((section) => section.title === activeSection)?.content}
            </div>
        </div>
    );
};

export default HotelMenuSwitcher;
