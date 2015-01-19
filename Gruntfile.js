module.exports = function (grunt) {

  // loads tasks
  require('load-grunt-tasks')(grunt);

  // Load /tasks directory
  grunt.loadTasks('tasks');


  // process paths
  var path = {
        labels:   './labels',
        emailSrc: './templates/email_src',
        emails:   './templates/email'
      }

    ;


  // initialize configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jsonlint: {
      default: {
        src: [path.labels + '/**/*.json']
      }
    },

    juice: {
      emails: {
        options: {
          extraCss: grunt.file.read(path.emailSrc + '/email.css')
        },

        files: [{
          expand: true,
          cwd: path.emailSrc + '/',
          src: ['**/*.hypr*'],
          dest: path.emails + '/',
          ext: '.hypr'
        }]
      }
    },

    watch: {
      json: {
        files: [path.labels + '/**/*.json'],
        tasks: ['jsonlint'],
        options: {
          spawn: false
        }
      },

      emails: {
        files: [path.emailSrc + '/**/*'],
        tasks: ['juice', 'strainer:' + path.emails + '/*.hypr*']
      }
    }
  });


  // registers tasks
  grunt.registerTask('email', ['juice', 'strainer:' + path.emails + '/*.hypr*']);
  grunt.registerTask('default', ['email']);

};
