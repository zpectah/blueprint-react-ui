import { ThemeProps } from '../types';
import { BREAKPOINTS, CONTAINER_WIDTH } from '../constants';

const defaultTheme: ThemeProps = {
    mode: 'default',
    palette: {
        primary: {
            base: 'rgb(48,63,159)',
            light: 'rgb(48,63,159)',
            dark: 'rgb(48,63,159)',
            text: 'rgb(253,253,253)',
        },
        secondary: {
            base: 'rgb(41,40,45)',
            light: 'rgb(41,40,45)',
            dark: 'rgb(41,40,45)',
            text: 'rgb(253,253,253)',
        },
        info: {
            base: 'rgb(25,118,210)',
            light: 'rgb(25,118,210)',
            dark: 'rgb(25,118,210)',
            text: 'rgb(253,253,253)',
        },
        success: {
            base: 'rgb(56,142,60)',
            light: 'rgb(56,142,60)',
            dark: 'rgb(56,142,60)',
            text: 'rgb(253,253,253)',
        },
        warning: {
            base: 'rgb(255,160,0)',
            light: 'rgb(255,160,0)',
            dark: 'rgb(255,160,0)',
            text: 'rgb(2,2,2)',
        },
        error: {
            base: 'rgb(211,47,47)',
            light: 'rgb(211,47,47)',
            dark: 'rgb(211,47,47)',
            text: 'rgb(253,253,253)',
        },
        text: {
            primary: 'rgb(2,2,2)',
            secondary: 'rgb(41,40,45)',
            disabled: 'rgb(98,93,96)',
        },
        border: 'rgb(41,40,45)',
        background: {
            primary: 'rgb(250,250,250)',
            secondary: 'rgb(235,235,235)',
        },
        action: {
            active: 'rgba(48,63,159,0.5)',
            hover: 'rgba(48,63,159,0.5)',
            selected: 'rgba(48,63,159,0.5)',
            disabled: 'rgba(235,235,235,0.5)',
            focus: 'rgba(235,235,235,0.25)',
        },
    },
    shape: {
        radius: 3,
    },
    typography: {
        fontFamily: {
            base: 'sans-serif',
        },
        lineHeight: {
            base: 1.345,
        },
    },
    spacing: {
        base: '1rem',
    },
    components: {},
    breakpoint: BREAKPOINTS,
    container: CONTAINER_WIDTH,
};

export default defaultTheme;
