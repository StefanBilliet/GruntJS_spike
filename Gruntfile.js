/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jasmine: {
    pivotal: {
      src: 'src/**/*.js',
      options: {
        specs: 'specs/*spec.js',
        helpers: 'spec/*Helper.js',
        template: require('grunt-template-jasmine-requirejs')
      }
    }
  }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');

};
