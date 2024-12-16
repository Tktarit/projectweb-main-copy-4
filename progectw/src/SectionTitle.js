// SectionTitle.js
import React from 'react';

const SectionTitle = ({ title }) => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '80px',
            borderTop: '2px solid black',
            borderBottom: '2px solid black',
            padding: '20px',
            width: '80%',
            margin: '0 auto',
        },
        title: {
            fontSize: '48px',
        },
    };

    return (
        <div style={styles.container}>
            <p style={styles.title}>{title}</p>
        </div>
    );
};

export default SectionTitle;
