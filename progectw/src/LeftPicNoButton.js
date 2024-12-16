import React from 'react';


const LeftPicNoButton = ({ title,title2, description,description2,description3, imgSrc, buttons }) => {
   

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
            textAlign: 'left',
            backgroundColor: '#000080',
        },
        title: {
            color: '#FFD700',
            fontSize: '32px',
            fontWeight: 'bold',
        },
        description: {
            color: '#FFD700',
            fontSize: '16px',
            margin: '20px 0',
            maxWidth: '80%',
        },
        
        
    };

    return (
        <section style={styles.container}>
            <div style={styles.leftSide}>
                <img src={imgSrc} alt='pic' style={styles.image} />
            </div>
            <div style={styles.rightSide}>
                <p style={styles.title}>{title}</p>
                <p style={styles.title}>{title2}</p>
                <p style={styles.description}>{description}</p>
                
            </div>
        </section>
    );
};

export default LeftPicNoButton;
