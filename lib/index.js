/**
 * Imports
 */

var forEach = require('foreach')

/**
 * defaults
 */

function defaults (obj, src) {
  forEach(src, function (val, key) {
    if (obj[key] === undefined) {
      obj[key] = val
    }
  })

  return obj
}

/**
 * Exports
 */

module.exports = defaults
