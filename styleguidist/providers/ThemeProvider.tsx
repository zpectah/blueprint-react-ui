// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

const ThemeProvider = ({ children }) => {
    console.log('ThemeProvider loaded');
    return (
        <>{children}</>
    );
};

export default ThemeProvider;
