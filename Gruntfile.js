module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.
    clean: {
      dist: 'build'
    },


    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      grunt: {
        src: 'Gruntfile.js'
      },
      src: {
        src: 'src/js/*.js'
      }
    },

    less: {
      dev: {
        files: {
          'src/css/styles.css': 'less/styles.less'
        }
      },
      dist: {
        // options: {
        //   cleancss: true,
        //   compress: true
        // },
        files: {
          'src/css/styles.css': 'less/styles.less'
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

    // connect: {
    //   server: {
    //     options: {
    //       port: 9000,
    //       hostname: 'localhost',
    //       base: 'src'
    //     },
    //     livereload: {
    //       options: {
    //         base: 'src/',
    //         open: true
    //       }
    //     }
    //   }
    // },

    browserSync: {
      bsFiles: {
        src : [
          'src/css/*.css',
          '*.html'
        ]
      },
      options: {
        // proxy: 'localhost',
        port: 9000,
        watchTask: true,
        server: {
          baseDir: 'src'
        }
      }
    },

    bsReload: {
      html: {
        reload: true
      }
    },

    watch: {
      options: {
        // livereload: true,
        spawn: false
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:grunt']
      },
      less: {
        files: 'less/*.less',
        tasks: ['less:dev']
      },
      html: {
        files: 'src/**/*.html',
        tasks: ['bsReload:html']
      }
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});


  // Default task.
  grunt.registerTask('default', ['less:dev', 'copy', 'browserSync', 'watch']);
  // Task for build.
  grunt.registerTask('build', ['clean', 'less:dist', 'copy:dist']);

};
