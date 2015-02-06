"use strict";

module.exports = function (grunt) {

  // define task paths
  var paths = {
        models:     process.cwd() + '/tasks/__models/',
        swig:       process.cwd() + '/tasks/__swig/',
        labels:     process.cwd() + '/labels/',
        testEmails: process.cwd() + '/__email_test/',
        email: {
          src:  process.cwd() + '/templates/email/',
          dest: process.cwd() + '/___email_test/'
        }
      }
    ;


  // define task helpers
  var _         = require('lodash')
    , swig      = require('swig')
    , loader    = require(paths.swig + 'loader')

  // swig tags...
    , tCmsRes   = require(paths.swig + 't_cms_resources')
    , tComment  = require(paths.swig + 't_comment')
    , tDump     = require(paths.swig + 't_dump')
    , tWith     = require(paths.swig + 't_with')
    ;



  // SWIG DOCS: http://paularmstrong.github.io/swig/
  swig.setDefaults({
    loader:   loader(process.cwd() + '/templates')
  });



  // Register custom tags
  // -----
  //   setTag( name ,           parse,           compile,           ends,   blockLevel )
  swig.setTag('cms_resources',  tCmsRes.parse,   tCmsRes.compile,   false,  false);
  swig.setTag('comment',        tComment.parse,  tComment.compile,  true,   true);
  swig.setTag('with',           tWith.parse,     tWith.compile,     true,   true);
  swig.setTag('dump',           tDump.parse,     tDump.compile,     false,  false);


  // Register custom filters
  swig.setFilter('string_format', require(paths.swig + 'f_string_format'));
  swig.setFilter('currency',      require(paths.swig + 'f_currency'));


  // Register email swig
  grunt.registerTask('email-swig', 'Compiles email templates with Swig.', function() {

    var emails = grunt.file.expand({}, paths.email.src + '*.hypr')
      , template
      , filename
      , model
      ;

    _.each(emails, function(filePath) {

      // ignore email.hypr because we're extending it already
      if (filePath.match(/email.hypr/)) { return; }

      // grunt.log.writeln(filePath);

      // parse filename so we know which model to get...
      filename = filePath.split('/').pop().split('.')[0];

      // don't bother swigging the template if our model doesn't exist...
      if (!grunt.file.exists(paths.models + filename + '.json')) { return; }

      // get our model
      model = grunt.file.readJSON(paths.models + filename + '.json');

      model.labels = grunt.file.readJSON(paths.labels + 'en-us.json');

      // render the template
      template = swig.renderFile(filePath, model);

      // write out the compiled template for testing
      grunt.file.write(paths.testEmails + filename + '.hypr', template);

    });

  });

};
