/*jshint laxbreak:true, laxcomma:true */
/*global module */
module.exports = function() {
  var str = arguments[0]
    , i   = -1
    ;

  while ((i+=1) <= arguments.length - 1) {
    str = str.replace(new RegExp('\\{' +  i + '\\}', 'gm'), arguments[i+1]);
  }
  return str;
};
