module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.
    clean: {
      dist: 'build'
    },

    less: {
      dev: {
        files: {
          'src/css/styles.css': './less/styles.less'
        }
      },
      dist: {
        options: {
          cleancss: true,
          compress: true
        },
        files: {
          'src/css/styles.css': './less/styles.less'
        }
      }
    },

    // csscomb: {
    //   sort: {
    //     options: {
    //       config: 'less/.csscomb.json'
    //     },
    //     files: {
    //       'src/css/html5reset.css': 'src/css/html5reset.css',
    //       'src/css/styles.css': 'src/css/styles.css'
    //     }
    //   }
    // },

    copy: {
      fonts: {
        expand: true,
        src: 'fonts/*',
        dest: 'src/'
      },
      dist: {
        expand: true,
        cwd: 'src/',
        src: ['**'],
        dest: 'build/'
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: 'src'
        },
        livereload: {
          options: {
            base: 'src/',
            open: true
          }
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      less: {
        files: './less/*.less',
        tasks: 'less'
      },
      htmls: {
        files: './src/**/*.html'
      }
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});


  // Default task.
  grunt.registerTask('default', ['clean', 'less:dev', 'copy', 'connect', 'watch']);
  // Task for build.
  grunt.registerTask('build', ['clean', 'less:dist', 'copy:dist']);

};
