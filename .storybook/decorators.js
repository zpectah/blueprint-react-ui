import { ThemeProvider } from '@blueprint-react-ui/core/src';

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    )
];
