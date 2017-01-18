//THE BELOW WILL SHOW PROFILE PIC VIA LOCAL HOST BUT WILL NOT DEPLOY, DOESNT HAVE COPIES

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');


  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: [ "document", "console", "$", "firebase", "app", "angular"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
     sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass', 'jshint', 'watch']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('deploy', ['sass','copy']);
};

//THE BELOW WILL ALLOW YOU TO RUN GRUNT DEPLOY BUT WILL NOT SHOW PROFILE PIC

// module.exports = function(grunt) {

//   grunt.loadNpmTasks('grunt-contrib-jshint');
//   grunt.loadNpmTasks('grunt-contrib-nodeunit');
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-contrib-copy');
//   grunt.loadNpmTasks('grunt-sass');

//   grunt.initConfig({
//     jshint: {
//       files: ['../javascripts/**/*.js'],
//       options: {
//         predef: [ "document", "console", "$", "firebase", "FbAPI", "app", "angular"],
//         esnext: true,
//         globalstrict: true,
//         globals: {},
//         browserify: true
//       }
//     },
//      sass: {
//       dist: {
//         files: {
//           '../styles/main.css': '../sass/main.scss'
//         }
//       }
//     },
//     watch: {
//       javascripts: {
//         files: ['../javascripts/**/*.js'],
//         tasks: ['jshint']
//       },
//       sassy: {
//         files: ['../sass/**/*.scss'],
//         tasks: ['sass']
//       }
//     },
//     copy: {
//       dev: {
//         files: [
//           {
//             expand: true,
//             cwd:"../",
//             src: [
//               "index.html",
//               "javascripts/**/*.js",
//               "styles/**/*.css",
//               "partials/**/*.html",
//               "lib/bower_components/bootstrap/dist/css/bootstrap.min.css",
//               "lib/bower_components/jquery/dist/jquery.min.js",
//               "lib/bower_components/bootstrap/dist/js/bootstrap.min.js",
//               "lib/bower_components/angular/angular.min.js",
//               "lib/bower_components/angular-route/angular-route.min.js",
//               "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js",
//               "/img"
//             ],
//             dest: "../public/"
//         }
//         ]
//       }
//     }
//   });

//   grunt.registerTask('default', ['sass', 'jshint', 'watch']);
//   grunt.registerTask('lint', ['jshint']);
//   grunt.registerTask('deploy', ['sass','copy']);
// };


