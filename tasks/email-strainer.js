"use strict";


module.exports = function (grunt) {

  // filters out unnecessary tags from email partials
  grunt.registerTask('strainer', "Remove unnecessary HTML tags in email partials.", function (partials) {
    grunt.file.expand(partials).map(function(filePath) {
      var oldHtml = grunt.file.read(filePath),
      newHtml = oldHtml.replace(/<html><body+\s+[^>]*>/g, '').replace('</body></html>', '');

      grunt.file.write(filePath, newHtml);

      grunt.log.writeln('File "' + filePath + '" filtered.');
    });

    grunt.log.oklns('Email partials are now pulp-free and ready for production.');
  });

};
