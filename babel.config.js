module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', {'runtime': 'automatic'}],
    '@babel/preset-flow'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};