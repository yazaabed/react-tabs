'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/prod/index.js');
} else {
  module.exports = require('./lib/dev/index.js');
}