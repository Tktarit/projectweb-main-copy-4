import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftPicWithButton = ({ title, description, description2, description3, imgSrc, buttons }) => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100%',
        },
        leftSide: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        rightSide: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#000080',
        },
        title: {
            marginTop: '50px',
            color: '#FFD700',
            fontSize: '32px',
            fontWeight: 'bold',
        },
        description: {
            color: '#FFD700',
            fontSize: '18px',
            margin: '20px 0',
            maxWidth: '80%',
            textAlign: 'left',
        },
        
    };

    return (
        <section style={styles.container}>
            <div style={styles.leftSide}>
                <img src={imgSrc} alt="pic" style={styles.image} />
            </div>
            <div style={styles.rightSide}>
                <p style={styles.title}>{title}</p>
                <p style={styles.description}>{description}</p>
                <p style={styles.description}>{description2}</p>
                <p style={styles.description}>{description3}</p>
                <div style={{ height: '30%', width: '90%' }}>
                    {buttons.map((button, index) => (
                        <button
                            className='astraea-border-button'
                            key={index}
                            style={styles.button}
                            onClick={() => handleButtonClick(button.path)}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeftPicWithButton;
