import React from 'react';

const DrinkMenu = ({ items }) => {
    const styles = {
        menuContainer: {
            backgroundColor: '#f8f4e1',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'serif',
        },
        
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem',
            columnGap: '12rem',
            maxWidth: '900px',
            margin: '0 auto',
            justifyContent: 'center', // Center the grid items horizontally
        },
        menuItem: {
            textAlign: 'center',
        },
        itemTitle: {
            fontWeight: 'bold', 
            fontSize: '20px', 
            marginBottom: '10px',
            
        },
        itemDescription: {
            
             
           fontSize: '16px', 
            lineHeight: '1.5', // Make multi-line descriptions more readable
            margin: '5px 0'
        },
        descriptionList: {
            listStyleType: 'none',
            padding: 0,
            margin: 0,
        },
        descriptionItem: {
            
            marginBottom: '0.3rem', // Add some space between description lines
        },
    };

    return (
        <section style={styles.menuContainer}>
            
            <div style={styles.grid}>
                {items.map((item, index) => (
                    <div key={index} style={styles.menuItem}>
                        <h2 style={styles.itemTitle}>{item.title}</h2>
                        {Array.isArray(item.description) ? (
                            <ul style={styles.descriptionList}>
                                {item.description.map((desc, idx) => (
                                    <li key={idx} style={styles.descriptionItem}>{desc}</li>
                                ))}
                            </ul>
                        ) : (
                            <p style={styles.itemDescription}>{item.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DrinkMenu;
