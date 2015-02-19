/*jshint laxbreak:true, laxcomma:true */
/*global module */
module.exports = function() {
  var argsLen = arguments.length - 1
    , string  = arguments[0]
    , i       = -1
    ;

  while ((i+=1) <= argsLen) {
    string = string.replace(new RegExp('\\{' +  i + '\\}', 'gim'), arguments[i+1]);
  }
  return string;
};
