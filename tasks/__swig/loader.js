var fs = require('fs'),
  path = require('path');

module.exports = function (basepath, encoding) {
  var ret = {};

  encoding = encoding || 'utf8';
  basepath = (basepath) ? path.normalize(basepath) : null;

  ret.resolve = function (to, from) {
    if (basepath) {
      from = basepath;
    } else {
      from = (from) ? path.dirname(from) : process.cwd();
    }
    return path.resolve(from, to);
  };

  ret.load = function (identifier, cb) {
    if (!fs || (cb && !fs.readFile) || !fs.readFileSync) {
      throw new Error('Unable to find file ' + identifier + ' because there is no filesystem to read from.');
    }

    // Start of added code...
    var extension = path.extname(identifier);

    if (!extension) {
      // Set this to whatever you want as a default
      // If the extension exists, like 'foo.xml', it won't add the '.html'
      identifier += '.hypr';

      var temp = ret.resolve(identifier);

      if (!fs.readFileSync(temp, encoding)) {
        identifier += '.live';
      }
    }
    // End of added code

    identifier = ret.resolve(identifier);

    if (cb) {
      fs.readFile(identifier, encoding, cb);
      return;
    }
    return fs.readFileSync(identifier, encoding);
  };

  return ret;
};
