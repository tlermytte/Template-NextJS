const path = require('path')
module.exports = {
  addons: ['@storybook/addon-backgrounds/register'],
  stories: ['../components/**/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../components'),
        path.resolve(__dirname, '../backend'),
        path.resolve(__dirname, '../stories'),
        path.resolve(__dirname, '../providers'),
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['react-docgen'],
          },
        },
        {
          loader: 'react-docgen-typescript-loader',
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.modules = [
      ...[
        path.resolve(__dirname, '../components'),
        path.resolve(__dirname, '../backend'),
        path.resolve(__dirname, '../stories'),
        path.resolve(__dirname, ".."),
      ],
      ...(config.resolve.modules || []),
    ]

    config.module.rules.find(
      (rule) => rule.test.toString() === '/\\.css$/'
    ).exclude = /\.module\.css$/

    config.module.rules.push({
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, '../components'),
        path.resolve(__dirname, '../backend'),
        path.resolve(__dirname, '../stories'),
        path.resolve(__dirname, '../providers'),
      ],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            javascriptEnabled: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
}
