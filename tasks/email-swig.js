"use strict";

module.exports = function (grunt) {

  var _     = require('lodash')
    , swig  = require('swig')
    ;


  var paths = {
        email: {
          src:  process.cwd() + "/templates/email",
          dest: process.cwd() + "/___email_test"
        }
      }
    ;


  // SWIG DOCS: http://paularmstrong.github.io/swig/
  swig.setDefaults({
    loader:   swig.loaders.fs(process.cwd() + '/templates' )
  });


  grunt.registerTask('email-swig', 'Compiles email templates with Swig to.', function() {

    var emails = grunt.file.expand({}, paths.email.src + '/*.hypr')
      , template
      ;


    _.each(emails, function(filePath) {

      // ignore email.hypr because we're extending it already
      if (filePath.match(/email.hypr/)) { return; }

      grunt.log.writeln(filePath);

      template = swig.renderFile(filePath, {});

      grunt.log.writeln(template);

    });


    // grunt.log.writeln(JSON.stringify(emails));

    // var template = swig.renderFile('./___swigTest/test.hypr', {
    //   pagename: "Testing 'pagename'",
    //   authors: [
    //     "Testing Author1",
    //     "Testing Author2",
    //     "Testing Author3"
    //   ]
    // });



    // grunt.log.writeln(template);

  });

};
