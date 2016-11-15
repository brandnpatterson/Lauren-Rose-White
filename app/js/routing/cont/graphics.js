/**
 * Graphics Controller
**/

function GraphicsController($log) {

  angular.extend(this, {

    test: 'Graphics'
  });
}

angular
.module('routing')
.controller('GraphicsController', ['$log', GraphicsController]);
