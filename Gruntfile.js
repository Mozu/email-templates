module.exports = function (grunt) {
  // initialize configuration
  grunt.initConfig({
    jsonlint: {
      default: {
        src: ['labels/**/*.json']
      }
    },
    juice: {
      emails: {
        files: [{
          expand: true,
          cwd: 'templates/email/src',
          src: ['**/*.hypr*'],
          dest: 'templates/email/',
          ext: '.hypr'
        }],
        options: {
          extraCss: grunt.file.read('templates/email/src/email.css')
        }
      }
    },
    watch: {
      json: {
        files: ['labels/**/*.json'],
        tasks: ['jsonlint'],
        options: {
          spawn: false
        }
      },
      emails: {
        files: ['templates/email/src/**/*'],
        tasks: ['juice', 'strainer:' + 'templates/email/*.hypr*']
      }
    }
  });

  // loads tasks
  ['grunt-jsonlint',
   'grunt-contrib-watch',
   'grunt-juice-email'].forEach(grunt.loadNpmTasks);

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

  // registers tasks
  grunt.registerTask('email', ['juice', 'strainer:' + 'templates/email/*.hypr*']);
  grunt.registerTask('default', ['email']);
};
