
import React from 'react';

const TREATMENTSMENU = ({
  menuTitle,
  subtitle,
  featuredTitle,
  sessionTitle,
  duration,
  price,
  highlights,
  description,
}) => {
  const containerStyle = {
    marginTop: '20px',
    backgroundColor: '#f7f1e9',
    color: 'black',
    padding: '0px 20px',
    
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '14px',
    textAlign: 'center',
    
  };


return (
    <div style={containerStyle}>
        <div style={titleStyle}>{menuTitle}</div>
        <div style={subtitleStyle}>{subtitle}</div>
        
    </div>
);
};

export default TREATMENTSMENU;
