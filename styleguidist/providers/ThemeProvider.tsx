// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ThemeProps } from '@blueprint-react-ui/core/src/types';
import { ThemeProvider as UIThemeProvider } from '@blueprint-react-ui/foundation/src';

const ThemeProvider = ({ children }) => {
    const customTheme = {
        colors: {
            base: 'rgb(10,10,10)',
        },
    } as ThemeProps;

    return (
        <UIThemeProvider theme={customTheme}>{children}</UIThemeProvider>
    );
};

export default ThemeProvider;
