/**
 * Home Controller
**/

function HomeController($log) {

  angular.extend(this, {

    test: 'Home'
  });
}

angular
.module('routing')
.controller('HomeController', ['$log', HomeController]);
