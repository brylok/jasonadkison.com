'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      main: ['build/'],
      dist: ['dist/']
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['**', '!*.scss'], dest: 'build/'},
          {expand: true, cwd: 'node_modules/font-awesome/fonts/', src: ['**'], dest: 'build/fonts/', flatten: true},
          {expand: true, cwd: 'images', src: ['**'], dest: 'build/images/'}
        ]
      },
      dist: {
        files: [
          {expand: true, cwd: 'build/', src: ['**', '!scss/**', '!js/**'], dest: 'dist/'},
          {expand: true, cwd: 'build/js', src: ['bundle.js'], dest: 'dist/js/'}
        ]
      }
    },
    browserify: {
      options: {
        debug: true,
        transform: [require('grunt-react').browserify, 'browserify-shim']
      },
      build: {
        src: ['src/js/**/*.js'],
        dest: 'build/js/bundle.js'
      }
    },
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'build/css/main.css': 'src/scss/main.scss'
        }
      }
    },
    'http-server': {
      dev: {
        root: 'dist/',
        port: 8081,
        host: '0.0.0.0',
        cache: 0,
        showDir: true,
        autoIndex: true,
        ext: 'html',
        runInBackground: true
      }
    },
    watch: {
      dist: {
        files: ['dist/**/*'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'src/js/**/*.js',
        tasks: ['browserify:build', 'copy:dist']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy']
      },
      images: {
        files: ['src/images/**/*'],
        tasks: ['copy']
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass', 'copy:dist']
      }
    },
    rsync: {
      options: {
        args: ['--verbose'],
        recursive: true
      },
      prod: {
        options: {
          src: './dist/',
          dest: '~/sites/jasonadkison.com',
          host: 'jason@jasonadkison.com',
          port: '2222'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('default', [
    'clean:main',
    'copy:main',
    'browserify',
    'sass',
    'clean:dist',
    'copy:dist',
    'http-server',
    'watch'
  ]);

  grunt.registerTask('deploy', [
    'clean:main',
    'copy:main',
    'browserify',
    'sass',
    'clean:dist',
    'copy:dist',
    'rsync:prod']
  );

};
