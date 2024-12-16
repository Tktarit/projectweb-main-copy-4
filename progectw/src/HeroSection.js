import React from 'react';
import PropTypes from 'prop-types';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const HeroSection = ({ title, subtitle, mainText,mainText2, description }) => {
  const containerStyle = {
    height: 'auto',
    backgroundColor: '#f7f1e9', // สีพื้นหลังแบบอ่อน
    color: '#000', // สีตัวอักษร
    textAlign: 'center',
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: '300',
    margin: '0',
  };

  const subtitleStyle = {
    fontSize: '24px',
    fontStyle: 'italic',
    margin: '0',
    marginBottom: '20px',
  };

  const mainTextStyle = {
    fontSize: '48px',
    fontWeight: '300',
    letterSpacing: '1px',
    margin: '0',
    
  };
  const mainTextStyle2 = {
    fontSize: '48px',
    fontWeight: '300',
    letterSpacing: '1px',
    margin: '0',
    marginBottom: '10px',
  };
  const descriptionStyle = {
    fontSize: '16px',
    color: '#333',
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <h2 style={subtitleStyle}>{subtitle}</h2>
      <h3 style={mainTextStyle}>{mainText}</h3>
      <h3 style={mainTextStyle2}>{mainText2}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroSection;
