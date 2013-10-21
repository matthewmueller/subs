/**
 * Expose `subs`
 */

module.exports = subs;

/**
 * Tiny string substitution
 *
 * Examples:
 *
 *   template('hi my name is {name}', { name: 'matt' })
 *   template('hi my name is {name}')({ name: 'matt' })
 *
 * @param {String} str
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function subs(str, obj) {
  if (1 == arguments.length) return function(obj) { return subs(str, obj) };
  return str.replace(/\{([^\}]+)\}/g, function(match, key) {
    return obj[key] || '';
  });
}
