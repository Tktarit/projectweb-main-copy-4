// BackgroundSection.js
import React from 'react';

const BackgroundSection = ({ image,height = '30vh', width = '100%' }) => {
    return (
        <section
            style={{
                height:  height,
                width:  width,
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/${image})`,
                backgroundSize: 'cover'
            }}
        ></section>
    );
};

export default BackgroundSection;
