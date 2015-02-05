
exports.compile = function (compiler, args, content, parents, options, blockName) {

  return JSON.stringify(args[0]);
};

exports.parse = function (str, line, parser, types) {
  return true;
};

