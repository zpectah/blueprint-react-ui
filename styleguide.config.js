// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package');

module.exports = {
    title: 'Blueprint React UI',
    version,
    skipComponentsWithoutExample: true,
    pagePerSection: true,
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
    sections: [
        {
            name: 'Getting started',
            content: path.join(__dirname, 'docs/Introduction.md'),
        },
        {
            name: 'Customization',
            content: path.join(__dirname, 'docs/Customization.md'),
        },
        {
            name: 'Core',
            content: path.join(__dirname, 'docs/Core/index.md'),
            sectionDepth: 3,
            sections: [
                {
                    name: 'Constants',
                    content: path.join(__dirname, 'docs/Core/Constants.md'),
                },
                {
                    name: 'Enums',
                    content: path.join(__dirname, 'docs/Core/Enums.md'),
                },
                {
                    name: 'Theme',
                    content: path.join(__dirname, 'docs/Core/Theme.md'),
                },
                {
                    name: 'Hooks',
                    content: path.join(__dirname, 'docs/Core/Hooks.md'),
                },
                {
                    name: 'Styles',
                    content: path.join(__dirname, 'docs/Core/Styles.md'),
                },
                {
                    name: 'Types',
                    content: path.join(__dirname, 'docs/Core/Types.md'),
                },
                {
                    name: 'Utility',
                    content: path.join(__dirname, 'docs/Core/Utility.md'),
                },
            ],
        },
        {
            name: 'Icons',
            content: path.join(__dirname, 'docs/Icons.md'),
            sectionDepth: 2,
        },
        {
            name: 'Components',
            content: path.join(__dirname, 'docs/Components.md'),
            components: path.join(__dirname, 'packages/components/src/**/[A-Z]*.{js,jsx,ts,tsx}'),
            sectionDepth: 3,
            usageMode: 'collapsed',
            exampleMode: 'expand',
        },
    ],
};
