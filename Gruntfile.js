<!-- install LiveReload for Firefox -->
<!-- grunt -->

<!-- browser-sync start --server --files *.* -->

module.exports = function (grunt) {

  grunt.initConfig({
  pkg: grunt.file.readJSON(process.env.HOME.concat('/package.json')),
  watch: {
    files: ['CSS/*.*', 'JavaScript/*.*', 'jQuery/*.*'],
    options: {
      livereload: true
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
