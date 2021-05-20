module.exports = {
  outputDir: 'docs',
  runtimeCompiler: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/buildings/' : '',
  assetsDir: process.env.NODE_ENV === 'production' ? 'buildings/' : '',
};
