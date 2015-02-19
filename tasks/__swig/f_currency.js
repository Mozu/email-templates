
// http://openexchangerates.github.io/accounting.js/
var accounting  = require('accounting')
  ;

module.exports = function(input, index) {
  var money = accounting.formatMoney(input);
  return money;
}
