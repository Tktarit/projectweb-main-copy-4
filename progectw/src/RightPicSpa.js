import React from 'react';

const RightPicSpa = ({ title, title2, middle1, middle2, description, imgSrc, buttons }) => {
    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100%',
        },
        leftSide: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '100px',
            padding: '0 100px',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textAlign: 'left',
        },
        description: {
            fontSize: '16px',
            margin: '20px 0',
            maxWidth: '80%',
            textAlign: 'left', // ให้ description ชิดซ้ายด้วย
        },
        rightSide: {
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
    };

    return (
        <section style={styles.container}>
            {/* Text Side (Left) */}
            <div style={styles.leftSide}>
                <div>
                    <h3 style={styles.title}>{title}</h3>
                    <h3 style={styles.title}>{title2}</h3>
                </div>
                <div>
                    <p style={styles.title}>{middle1}</p>
                    <p style={styles.title}>{middle2}</p>
                </div>
                <p style={styles.description}>{description}</p>
            </div>
            
            {/* Image Side (Right) */}
            <div style={styles.rightSide}>
                <img src={imgSrc} alt="pic" style={styles.image} />
            </div>
        </section>
    );
};

export default RightPicSpa;
