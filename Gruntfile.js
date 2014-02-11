module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.
    clean: {
      dist: 'build'
    },

    // jshint: {
    //   // options: {
    //   //   jshintrc: 'js/.jshintrc'
    //   // },
    //   grunt: {
    //     src: 'Gruntfile.js'
    //   },
    //   src: {
    //     src: 'src/js/*.js'
    //   }
    // },

    // csslint: {
    //   // options: {
    //   //   csslintrc: 'less/.csslintrc'
    //   // },
    //   src: [
    //     'src/css/html5reset.css',
    //     'src/css/styles.css'
    //   ]
    // },

    less: {
      development: {
        files: {
          'src/css/styles.css': './less/styles.less'
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          'build/css/styles.css': './less/styles.less'
        }
      }
    },

    csscomb: {
      sort: {
        options: {
          config: 'less/.csscomb.json'
        },
        files: {
          'build/css/html5reset.css': 'build/css/html5reset.css',
          'build/css/styles.css': 'build/css/styles.css'
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: 'fonts/*',
        dest: 'build/'
      },
      files: {
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
          base: 'build'
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
  grunt.registerTask('default', ['clean', 'less', 'csscomb', 'copy', 'connect', 'watch']);
  // Task for build.
  grunt.registerTask('build', ['clean', 'copy', 'connect', 'watch']);

};
