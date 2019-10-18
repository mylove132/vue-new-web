/*
 * @file 配置
 */
module.exports = {
	// indexPath: "../index.html",
	// outputDir: "./dist/Output",
	// assetsDir: "static",
	publicPath: './',
	// baseUrl: "/",
	productionSourceMap: false,// 不开启map
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9999',
        ws: true,
        changeOrigin: true
      }
    }
  },
};
