module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      'regenerator': true,
    }],
  ],
  env: {
    utils: {
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['f-ui'],
            alias: { 'f-ui/src': 'f-ui/lib' },
          },
        ],
      ],
    },
  },
}
