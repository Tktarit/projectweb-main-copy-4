import React from 'react'
import './style/Footers.css'

function Footers() {
  return (
    <div className='footer'>
    <div className='container-footer'>
      <div class="header-footer">โรงแรม ไซเบอร์วิสตา</div>
      <div className='image-footer'>
       <img className='logo' src={`${process.env.PUBLIC_URL}/image/room.jpg`} alt="img" />
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/room.jpg`} alt="img" />
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/room.jpg`} alt="img" />
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/room.jpg`} alt="img" />
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/room.jpg`} alt="img" />
      </div>

      <div class="footerr">
          <div class="contact-info">
              <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />
              <div>มหาวิทยาลัยศรีนครินทรวิโรฒ 63 หมู่ 7</div>
              <div>ต.องครักษ์ อ.องครักษ์ จ.นครนายก</div>
              <div>📞 0XX-XXX-XXXX</div>
              <div>📧 CyberVistaHotel@gmail.com</div>
          </div>
          <div class="links">
              <div>HOME</div>
              <div>HOTEL</div>
              <div>CAFÉ</div>
              <div>CLUBE</div>
              <div>SPA</div>
              <div>FITNESS CENTER</div>
          </div>
          <div class="links">
              <div>Privacy Policy</div>
              <div>Accessibility</div>
              <div>FAQs</div>
              <div>Contact Us</div>
          </div>
          <div class="social-icons">
                <img className='logo' src={`${process.env.PUBLIC_URL}/image/instagram.png`} alt="img" />
                <img className='logo' src={`${process.env.PUBLIC_URL}/image/facebook.png`} alt="img" />
                <img className='logo' src={`${process.env.PUBLIC_URL}/image/twitter-alt-square.png`} alt="img" />
                <img className='logo' src={`${process.env.PUBLIC_URL}/image/youtube.png`} alt="img" />
                 
            </div>
      </div>
    </div>
  </div>
  )
}

export default Footers
