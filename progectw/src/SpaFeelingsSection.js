import React from 'react';

const SpaFeelingsSection = () => {
    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '50px',
            backgroundColor: '#f9f3e8', // Light beige background similar to your image
            color: '#3a3a68', // Dark blue text color
            
        },
        title: {
            fontSize: '32px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
        },
        subtitle: {
            fontSize: '32px',
            textAlign: 'center',
            marginBottom: '20px',
        },
        description: {
            fontSize: '16px',
            maxWidth: '800px',
            textAlign: 'center',
            marginBottom: '50px',
            lineHeight: '1.5',
        },
        categoriesContainer: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '40px',
        },
        category: {
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
        },
        categoryItems: {
            marginTop: '10px',
            fontSize: '16px',
            color: '#3a3a68', // Dark blue text color for items
            lineHeight: '1.5',
        },
    };

    const categories = [
        { title: 'INVIGORATED', items: ['Herbal Compress Massage', 'Private Infrared Sauna Suites'] },
        { title: 'NURTURED', items: ['Herbal Compress Massage'] },
        { title: 'GROUNDED', items: ['Meditation Session', 'Private Infrared Sauna Suites', 'Customized Massage', 'Grounding Earth Session'] },
        { title: 'INSPIRED', items: ['Private Infrared Sauna Suites', 'Herbal Compress Massage', 'Mindful Dreams'] },
    ];

    return (
        <section style={styles.container}>
            <h2 style={styles.title}>NOT SURE WHERE TO START?</h2>
            <h3 style={styles.subtitle}>ASK YOURSELF HOW YOU WOULD LIKE TO FEEL TODAY.</h3>
            <p style={styles.description}>
                Start by thinking about your goals—how do you want to feel when walking out of the spa? Do you have a big day ahead and need to feel invigorated?
                Are you looking for some extra care and nurturing? Is your to-do list getting to be a little too much and you need to feel grounded again?
                Or do you want to unlock your creativity and walk out of here feeling inspired?
            </p>
            <div style={styles.categoriesContainer}>
                {categories.map((category, index) => (
                    <div key={index} style={styles.category}>
                        <p>{category.title}</p>
                        <div style={styles.categoryItems}>
                            {category.items.map((item, itemIndex) => (
                                <p key={itemIndex}>{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpaFeelingsSection;
