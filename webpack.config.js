const mode = process.env.mode || 'development';
module.exports = require(`./webpack.${mode}.js`);