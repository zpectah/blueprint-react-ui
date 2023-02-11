export interface ThemeProps {
    colors?: {
        base?: string;
    };
    typography?: {
        fontFamily?: {
            base?: string;
        };
        lineHeight?: {
            base?: string | number;
        };
    };
    spacing?: {
        base?: string;
    };
    components: object | undefined;
}
