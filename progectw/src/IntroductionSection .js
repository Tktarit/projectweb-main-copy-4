// IntroductionSection.js
import React from 'react';

const IntroductionSection = ({
    title1,
    title2,
    subtitle1,
    subtitle2,
    hours,
    service,
    service2,
    additionalInfo
}) => {
    return (
        <section
            style={{
                // minHeight: '100vh',
                height: 'auto',
                backgroundColor: '#f8f4e1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',

            }}
        >
            <p style={{ fontSize: '32px', paddingTop: '50px' }}>{title1}</p>
            <p style={{ fontSize: '32px' }}>{title2}</p>
            <p style={{ fontSize: '32px', paddingTop: '80px' }}>{subtitle1}</p>
            <p style={{ fontSize: '32px' }}>{subtitle2}</p>
            <p style={{ fontSize: '18px', paddingTop: '50px' }}>{hours}</p>
            <p style={{ fontSize: '18px', paddingTop: '50px' }}>{service}</p>
            <p style={{ fontSize: '18px'}}>{service2}</p>
            <p style={{ fontSize: '18px', paddingTop: '50px',width:'80%' }}>{additionalInfo}</p>
        </section>
    );
};

export default IntroductionSection;
