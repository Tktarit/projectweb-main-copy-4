
import React from 'react';

const FeaturedTreatment = ({
  menuTitle,
  subtitle,
  featuredTitle,
  sessionTitle,
  duration,
  price,
  highlights,
  description,
  descriptionWidth = '50%', 
}) => {
  const containerStyle = {
    backgroundColor: '#f7f1e9',
    color: 'black',
    padding: '40px 20px',
    
  };

  const featuredTitleStyle = {
    fontSize: '20px',
    
    textAlign: 'Left',
    margin: '20px 0',
  };

  const sessionTitleStyle = {
    fontSize: '18px',
    marginBottom: '5px',
    textAlign: 'Left',
  };

  const durationPriceStyle = {
    fontSize: '14px',
    color: 'black',
    marginBottom: '15px',
    textAlign: 'Left',
  };

  const highlightsStyle = {
    fontSize: '14px',
    color: 'black',
    marginBottom: '40px',
    textAlign: 'Left',

  };

  const descriptionStyle = {
    fontSize: '14px',
    color: 'black',
    lineHeight: '1.6',
    textAlign: 'Justify',
    width:  descriptionWidth, 
  };

  return (
    <div style={containerStyle}>
    
      <div style={featuredTitleStyle}>{featuredTitle}</div>
      <div style={sessionTitleStyle}>{sessionTitle}</div>
      <div style={durationPriceStyle}>
        {duration} | {price}
      </div>
      <div style={highlightsStyle}>{highlights}</div>
      <div style={descriptionStyle}>{description}</div>
      
      
    </div>
  );
};

export default FeaturedTreatment;
