/**
 * Photography Controller
**/

function PhotoController($log) {

  angular.extend(this, {

    test: 'Photo'
  });
}

angular
.module('routing')
.controller('PhotoController', ['$log', PhotoController]);
