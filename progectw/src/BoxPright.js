// MainBoxSection.js
import React from 'react';

const BoxPright = ({ 
    imageSrc, 
    title1, 
    title2, 
    description, 
    backgroundColor = 'transparent' 
}) => {
    return (
        <section 
            className="mainbox" 
            style={{ display: 'flex', height: '120vh' }}
        >   
             <div 
                className="ls" 
                style={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    backgroundColor, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    marginLeft: '20px',
                }}
            >
                <div>
                    <p style={{ fontSize: '32px' }}>{title1}</p>
                    <p style={{ fontSize: '32px' }}>{title2}</p>    
                </div>
                <div>
                    <p 
                        style={{ 
                            fontSize: '16px', 
                            margin: '0 auto', 
                            width: '80%', 
                            wordWrap: 'break-word', 
                            paddingTop: '100px', 
                            textAlign: 'left'
                        }}
                    >
                        {description}
                    </p>
                </div>
            </div>
            <div 
                className="rs" 
                style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor }}
            >
                <img src={imageSrc} alt="pic" style={{ width: '80%' }} />
            </div>
           
        </section>
    );
};

export default BoxPright;
