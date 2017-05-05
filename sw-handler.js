const toolbox = require('sw-toolbox');
// Runtime cache configuration, using the sw-toolbox library.
toolbox.router.get(/^https:\/\/newsapi\.org\/v1\/articles/, toolbox.cacheFirst, {});
toolbox.router.get(/^https:\/\/media\.giphy\.com\/media/, toolbox.cacheFirst, {});
toolbox.router.default = toolbox.networkFirst;