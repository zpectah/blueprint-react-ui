// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package');

module.exports = {
    title: 'Blueprint React UI',
    version,
    skipComponentsWithoutExample: true,
    theme: path.join(__dirname, 'styleguidist/styleguide.theme.js'),
    styles: path.join(__dirname, 'styleguidist/styleguide.styles.js'),
    ribbon: {
        url: 'https://github.com/zpectah/blueprint-react-ui',
        text: 'GitHub',
        color: '#fff',
        background: '#24292e',
    },
    ignore: [
        '**/assets/**',
        '**/data/**',
        '**/__tests__/**',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/*.d.ts',
        '**/*.style.{js,jsx,ts,tsx}'
    ],
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    propsParser: require('react-docgen-typescript').parse,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'styleguidist/providers/ThemeProvider.tsx'),
    },
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        },
                    },
                },
            ]
        }
    },
    pagePerSection: true,
    sections: [
        {
            name: 'Introduction',
            content: path.join(__dirname, 'docs/Introduction.md'),
        },
        {
            name: 'Core',
            content: path.join(__dirname, 'docs/Core.md'),
            sectionDepth: 2,
        },
        {
            name: 'Foundation',
            content: path.join(__dirname, 'docs/Foundation/index.md'),
            sectionDepth: 3,
            sections: [
                {
                    name: 'Colors',
                    content: path.join(__dirname, 'docs/Foundation/Colors.md'),
                },
                {
                    name: 'Typography',
                    content: path.join(__dirname, 'docs/Foundation/Typography.md'),
                },
                {
                    name: 'Icons',
                    content: path.join(__dirname, 'docs/Foundation/Icons.md'),
                },
                {
                    name: 'Theme',
                    content: path.join(__dirname, 'docs/Foundation/Theme.md'),
                },
                {
                    name: 'Tokens',
                    content: path.join(__dirname, 'docs/Foundation/Tokens.md'),
                },
            ],
        },
        {
            name: 'Components',
            content: path.join(__dirname, 'docs/Components.md'),
            components: path.join(__dirname, 'packages/components/src/**/[A-Z]*.{js,jsx,ts,tsx}'),
            sectionDepth: 3,
            usageMode: 'expand',
            exampleMode: 'expand',
        },
    ],
};
