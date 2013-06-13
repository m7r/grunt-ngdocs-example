module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');

  grunt.initConfig({
    ngdocs: {
      options: {
        html5Mode: false
      },
      all: ['src.js']
    }
  });

};
