const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withCss({});
// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty',
//     };

//     return config;
//   },
// };
