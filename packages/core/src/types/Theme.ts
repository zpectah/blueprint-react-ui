export interface ThemeProps {
    colors?: {
        base?: string;
    };
    typography?: {
        fontFamily?: {
            base?: string;
        };
    };
    spacing?: {
        base?: string;
    };
    components: object | undefined;
}
