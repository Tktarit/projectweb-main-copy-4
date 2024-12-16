import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';   
import { faX } from '@fortawesome/free-solid-svg-icons';    
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
// Assuming you have a CSS file for styles

const Footer = () => {
    return (
        <footer style={{height:'auto'}}>
            <p style={{ textAlign: 'center', fontSize: '32px' }}>CyberVista Hotel</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src='./image/bgmain.jpg' alt="Image 1" style={{ width:'200px', height: '200px', margin: '0 10px' }} />
                <img src='./image/bgmain.jpg' alt="Image 2" style={{  width:'200px', height: '200px', margin: '0 10px' }} />
                <img src='./image/bgmain.jpg' alt="Image 3" style={{  width:'200px', height: '200px', margin: '0 10px' }} />
                <img src='./image/bgmain.jpg' alt="Image 4" style={{ width:'200px', height: '200px', margin: '0 10px' }} />
                <img src='./image/bgmain.jpg' alt="Image 5" style={{  width:'200px', height: '200px', margin: '0 10px' }} />
            </div>
            <img src="image/logo.png" alt="Image 1" style={{ display: 'block', margin: '50px auto 0 auto', height: '100px',marginLeft:'30px' }} />
            <div style={{ display: 'flex' }}>
                <div style={{textAlign:'left'}}>
                    <p style={{ width: '400px', wordWrap: 'break-word', marginLeft: '40px', fontSize: '16px' }}>
                        มหาวิทยาลัยศรีนครินทรวิโรฒ  63 หมู่ 7 ต.องครักษ์ อ.องครักษ์ จ.นครนายก
                    </p>
                    <p style={{ width: '400px', wordWrap: 'break-word', marginLeft: '40px', fontSize: '16px',marginTop:'20px' }}>📞: 0XX-XXX-XXXX</p>
                    <p style={{ width: '400px', wordWrap: 'break-word', marginLeft: '40px', fontSize: '16px' }}>📧: CyberVistaHotel@xxxmail.com</p>
                </div>
                <div style={{ borderLeft: '2px solid black', paddingLeft: '30px', paddingRight: '10px',textAlign:'left',marginLeft:'20px' }}>
                    <a href="#home" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Home</a>
                    <a href="#about" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Hotel</a>
                    <a href="#contact" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Café</a>
                    <a href="#contact" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Club</a>
                    <a href="#extra1" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Spa</a>
                    <a href="#extra3" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Fitness Center</a>
                </div>
                <div style={{ borderLeft: '2px solid black', paddingLeft: '30px', paddingRight: '10px',textAlign:'left' }}>
                    <a href="#privacy-policy" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Privacy Policy</a>
                    <a href="#accessibility" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Accessibility</a>
                    <a href="#faqs" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>FAQs</a>
                    <a href="#contact-us" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>Contact Us</a>
                </div>
                <div className="social" style={{ marginLeft: '100px' }}>
                    <a href="https://twitter.com" style={{ color: '#333', marginRight: '20px', fontSize: '16px' }}>
                        <FontAwesomeIcon icon={faInstagram}  style={{width:'50px',height:'50px'}} />
                    </a>
                    <a href="https://www.facebook.com/CatDumbOfficial" style={{ color: '#333', marginRight: '20px', fontSize: '16px' }}>
                        <FontAwesomeIcon icon={faFacebook}  style={{width:'50px',height:'50px'}} />
                    </a>
                    <a href="https://linkedin.com" style={{ color: '#333', marginRight: '20px', fontSize: '16px' }}>
                        <FontAwesomeIcon icon={faX}  style={{width:'50px',height:'50px'}}  />
                    </a>
                    <a href="https://linkedin.com" style={{ color: '#333', marginRight: '20px', fontSize: '16px',}}>
                        <FontAwesomeIcon icon={faYoutube} style={{width:'50px',height:'50px'}} />
                    </a>
                </div>
            </div>
            <div style={{ textAlign: 'center',marginTop:'20px' }}>
                <img src='./image/logoo.png' alt="Image 1" style={{width:'50px',height:'50px'}} />
            </div>
            <p style={{ fontSize: '16px' }}>&copy; 2023 MimAndAkom. All rights reserved.</p>
        </footer>
    );
};

export default Footer;