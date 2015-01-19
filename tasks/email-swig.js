"use strict";


var _     = require('lodash')
  , swig  = require('swig')
  ;


module.exports = function (grunt) {

  grunt.registerTask('email-swig', 'Compiles email templates with Swig to.', function() {

    // grunt.log.ok('pants');

    var template = swig.renderFile('./___swigTest/test.hypr', {
      pagename: "Testing 'pagename'",
      authors: [
        "Testing Author1",
        "Testing Author2",
        "Testing Author3"
      ]
    });

    grunt.log.writeln(template);

  });

};
