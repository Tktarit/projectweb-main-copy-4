import React, { createContext, useState } from 'react';

// สร้าง Context
export const AppContext = createContext();

// สร้าง Provider
export const AppProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('SPA');

    return (
        <AppContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </AppContext.Provider>
    );
};
