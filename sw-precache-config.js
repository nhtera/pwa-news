module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  runtimeCaching: [{
    urlPattern: /^https:\/\/api.rss2json\.com\/v1\/api.json/,
    handler: 'networkFirst'
  }]
};
