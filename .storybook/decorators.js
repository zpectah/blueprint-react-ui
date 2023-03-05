import { ThemeProvider } from '@blueprint-react-ui/core/src';

export const decorators = [
    (Story) => (
        <ThemeProvider theme={{ shape: { radius: 5 } }}>
            <Story />
        </ThemeProvider>
    )
];
