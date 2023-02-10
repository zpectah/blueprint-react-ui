import React, { ReactNode } from 'react';
import { ThemeProps } from '../../../core/src/types';
import { ThemeContextProvider } from './ThemeContext';
import defaultTheme from './defaultTheme';

export interface ThemeProviderProps {
    children: ReactNode;
    theme?: ThemeProps;
}

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
    const mergedThemes = { ...Object.assign(defaultTheme, theme) };

    return (
        <ThemeContextProvider value={{ theme: mergedThemes }}>{children}</ThemeContextProvider>
    );
}

export default ThemeProvider;
