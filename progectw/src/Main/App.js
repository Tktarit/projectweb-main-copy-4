import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Overview from './Overview';
import Hotel from '../Menu/Hotel';
import Cafe from '../Menu/Cafe';
import Spa from '../Menu/Spa';
import Club from '../Menu/Club';
import ContactUs from '../Menu/ContactUs';
import Booknow from './Booknow';
import Evangeline from '../Rooms/Evangeline';
import Gabriel from '../Rooms/Gabriel';
import GSR from '../Rooms/GSR';
import GSRWB from '../Rooms/GSRWB';
import SR from '../Rooms/SR';
import SRWD from '../Rooms/SRWD';
import ScrollToTop from '../ScrollToTop';
import '../style/App.css';
import MenuSwitcher from '../MenuSwitcher';
import Register from './Register';
import Login from './Login';
import Reservation  from './Reservation';
import QRCodePage from './QRCodePage';
import Profile from './Profile';
import ReceptionDashboard from './ReceptionDashboard';
import RevenueDashboard from './RevenueDashboard';
function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<Navigate to="/Overview" replace />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/club" element={<Club />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/evangeline" element={<Evangeline />} />
          <Route path="/gabriel" element={<Gabriel />} />
          <Route path="/GSR" element={<GSR />} />
          <Route path="/GSRWB" element={<GSRWB />} />
          <Route path="/SR" element={<SR />} />
          <Route path="/SRWD" element={<SRWD />} />
          <Route path="/Booknow" element={<Booknow />} />
          <Route path="/MenuSwitcher" element={<MenuSwitcher />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/QRCodePage" element={<QRCodePage />} />
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/ReceptionDashboard' element={<ReceptionDashboard/>} />
          <Route path='/RevenueDashboard' element={<RevenueDashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
