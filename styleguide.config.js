// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package');

module.exports = {
    theme: {
        color: {
            sidebarBackground: 'rgb(250,250,250)',
        },
        // fontSize: {}
    },
    version,
    skipComponentsWithoutExample: true,
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
        Wrapper: path.join(__dirname, 'styleguidist/ThemeWrapper.tsx')
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
            name: 'Introduction',
            content: path.join(__dirname, 'docs/Introduction.md'),
        },
        {
            name: 'Foundation',
            components: path.join(__dirname, 'packages/foundation/**/[A-Z]*.{js,jsx,ts,tsx}'),
            sectionDepth: 2
        },
        {
            name: 'Core',
            components: path.join(__dirname, 'packages/core/**/[A-Z]*.{js,jsx,ts,tsx}'),
            sectionDepth: 2
        },
        {
            name: 'Components',
            components: path.join(__dirname, 'packages/components/**/[A-Z]*.{js,jsx,ts,tsx}'),
            sectionDepth: 2
        },
        {
            name: 'Icons',
            components: path.join(__dirname, 'packages/icons/**/[A-Z]*.{js,jsx,ts,tsx}'),
            sectionDepth: 2
        },
    ],
};
