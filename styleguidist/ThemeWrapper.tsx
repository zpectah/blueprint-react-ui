// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

const ThemeWrapper = ({ children }) => {
    console.log('ThemeWrapper loaded');
    return (
        <div className="some-wrapper-class">{children}</div>
    );
};

export default ThemeWrapper;
