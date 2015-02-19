/*jshint laxbreak:true, laxcomma:true */
/*global module, require */

module.exports = function() {
  // http://openexchangerates.github.io/accounting.js/
  var accounting  = require('accounting');

  return accounting.formatMoney(arguments[0]);
};
