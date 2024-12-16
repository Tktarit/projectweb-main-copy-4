import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SPA from './SPA';
import SPATREATMENTS from './SPATREATMENTS';
import Sauna from './Sauna';
import MEDITATION from './MEDITATION';
import SpaMenu from './SpaMenu';
const MenuSwitcher = () => {
    const [activeSection, setActiveSection] = useState('SPA');
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับเปลี่ยนหน้า
    const sections = [
        { title: 'SPA', content: <SPA setActiveSection={setActiveSection} /> },
        { title: 'SPA TREATMENTS', content: <SPATREATMENTS /> },
        { title: 'SAUNA', content: <Sauna /> },
        { title: 'MEDITATION', content: <MEDITATION /> },
        { title: 'MENU', content: <SpaMenu /> },
        { title: 'BOOK NOW', content: 'Book your appointment today!' }
    ];

    const handleMenuClick = (section) => {
        if (section === 'BOOK NOW') {
            navigate('/Booknow'); // ไปยังหน้า /booking
        } else {
            setActiveSection(section);
        }
    };

    const styles = {
        container: {
            backgroundColor: '#000080',
            color: '#FFD700',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        menuItem: {
            margin: '0 20px',
            fontSize: '18px',
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
            // padding: '40px',
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
                {sections.find(section => section.title === activeSection)?.content}
            </div>
        </div>
    );
};

export default MenuSwitcher;
