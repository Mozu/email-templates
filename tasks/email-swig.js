"use strict";

module.exports = function (grunt) {

  var _         = require('lodash')
    , swig      = require('swig')
    , loader    = require('./__swig/loader')

      // swig tags...
    , tCmsRes   = require('./__swig/t_cms_resources')
    , tComment  = require('./__swig/t_comment')
    , tDump     = require('./__swig/t_dump')
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
    loader:   loader(process.cwd() + '/templates')
  });



  // Register custom tags
  //  swig.setTag( name ,           parse,           compile,           ends,   blockLevel )
      swig.setTag('cms_resources',  tCmsRes.parse,   tCmsRes.compile,   false,  false);
      swig.setTag('comment',        tComment.parse,  tComment.compile,  true,   true);
      swig.setTag('dump',           tDump.parse,     tDump.compile,     false,  false);


  // Register custom filters
  swig.setFilter('string_format', require('./__swig/f_string_format'));
  swig.setFilter('currency',      require('./__swig/f_currency'));


  // Register email swig
  grunt.registerTask('email-swig', 'Compiles email templates with Swig.', function() {

    var emails = grunt.file.expand({}, paths.email.src + '/*.hypr')
      , template
      , filename
      ;

    _.each(emails, function(filePath) {

      // ignore email.hypr because we're extending it already
      if (filePath.match(/email.hypr/)) { return; }

      grunt.log.writeln(filePath);

      filename = filePath.split('/');


      template = swig.renderFile(filePath, {});

      debugger;
      // grunt.file.write('../email_templates/', template);

      // grunt.log.writeln(template);

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


  });

};
