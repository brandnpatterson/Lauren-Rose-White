/**
 * Config
**/

angular
  .module('routing')
  .config(function($routeProvider) {

    $routeProvider

    .when('/contact', { // when the # is /contact, make contact.html the view
      templateUrl: 'dist/views/contact.html',
      controller: 'ContactController',
    })

    .when('/graphics', {
      templateUrl: 'dist/views/graphics.html',
      controller: 'GraphicsController',
    })

    .when('/home', {
      templateUrl: 'dist/views/home.html',
      controller: 'MainController',
    })

    .when('/photo', {
      templateUrl: 'dist/views/photo.html',
      controller: 'MainController',
    })

    .when('/print', {
      templateUrl: 'dist/views/print.html',
      controller: 'MainController',
    })

    .when('/videos', {
      templateUrl: 'dist/views/videos.html',
      controller: 'VideosController',
    })

    .otherwise({
      redirectTo : '/home'
    });
  });
