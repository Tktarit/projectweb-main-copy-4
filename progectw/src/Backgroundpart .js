// BackgroundSection.js
import React from 'react';

const BackgroundSection = ({ image }) => {
    return (
        <section
            style={{
                height: '50px',
                width: '100%',
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/${image})`,
                backgroundSize: 'cover'
            }}
        ></section>
    );
};

export default BackgroundSection;
