import { createContext, useContext } from 'react';
import { ThemeProps } from '../../../core/src/types';
import defaultTheme from './defaultTheme';

export interface ThemeContextProps {
    theme?: ThemeProps;
}

const defaultContext: ThemeContextProps = {
    theme: defaultTheme,
};

const ThemeContext = createContext<ThemeContextProps>(defaultContext);

export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;
export const useThemeContext = (): ThemeContextProps => useContext(ThemeContext);

export default ThemeContext;
