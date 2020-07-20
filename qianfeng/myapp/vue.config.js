module.exports = {
  devServer: {
    proxy: {
      '/json': {
        target: 'http://localhost:8888',
        // ws: true,
        changeOrigin: true
      }
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
};
