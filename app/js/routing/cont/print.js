/**
 * Printmaking Controller
**/

function PrintController($log) {

  angular.extend(this, {

    test: 'Printmaking'
  });
}

angular
.module('routing')
.controller('PrintController', ['$log', PrintController]);
