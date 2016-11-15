/**
 * Main Controller
**/

function MainController($log) {

  angular.extend(this, {

    test: 'Index'
  });
}

angular
.module('routing')
.controller('MainController', ['$log', MainController]);
