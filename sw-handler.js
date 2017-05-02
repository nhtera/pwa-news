const toolbox = require('sw-toolbox');
// Runtime cache configuration, using the sw-toolbox library.
toolbox.router.get(/^https:\/\/newsapi\.org\/v1\/articles/, toolbox.networkFirst, {});
toolbox.router.get(/^https:\/\/media\.giphy\.com\/media/, toolbox.networkFirst, {});
toolbox.router.default = toolbox.networkFirst;