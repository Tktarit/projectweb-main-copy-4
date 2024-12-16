import React from 'react';
import BackgroundSection from '../Backgroundpart ';
import SlideMenu from '../Menu';
import MenuSwitcher from '../MenuSwitcher';
function Spa() {
    return (
        <div style={{backgroundColor:'#f8f4e1', margin: '0', padding: '0'
        }}>
            <BackgroundSection image='bgmain.jpg' />
            <SlideMenu />
            <MenuSwitcher />
            
             
        </div>
    );
}

export default Spa;
