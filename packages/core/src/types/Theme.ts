import { BreakpointKey } from '../enums';

export type PaletteObjectProps = {
    base: string;
    light: string;
    dark: string;
    text: string;
}

export interface ThemeProps {
    mode: string,
    palette: {
        primary: PaletteObjectProps;
        secondary: PaletteObjectProps;
        info: PaletteObjectProps;
        success: PaletteObjectProps;
        warning: PaletteObjectProps;
        error: PaletteObjectProps;
        text: {
            primary: string;
            secondary: string;
            disabled: string;
        };
        border: string;
        background: {
            primary: string;
            secondary: string;
        };
        action: {
            active: string;
            hover: string;
            selected: string;
            disabled: string;
            focus: string;
        };
    };
    typography: {
        fontFamily: {
            base: string;
        };
        lineHeight: {
            base: string | number;
        };
    };
    spacing: {
        base: string;
    };
    shape: {
        radius: number;
    };
    components: object | undefined;
    breakpoint: {
        [BreakpointKey.xs]: number;
        [BreakpointKey.sm]: number;
        [BreakpointKey.md]: number;
        [BreakpointKey.lg]: number;
        [BreakpointKey.xl]: number;
        [BreakpointKey.xxl]: number;
    };
    container: {
        [BreakpointKey.xs]: string;
        [BreakpointKey.sm]: string;
        [BreakpointKey.md]: string;
        [BreakpointKey.lg]: string;
        [BreakpointKey.xl]: string;
        [BreakpointKey.xxl]: string;
    };
}
