/**
 * Videos Controller
**/

function VideosController($log) {

  angular.extend(this, {

    test: 'Videos'
  });
}

angular
.module('routing')
.controller('VideosController', ['$log', VideosController]);
