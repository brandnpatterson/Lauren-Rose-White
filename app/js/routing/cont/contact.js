/**
 * Contact Controller
**/

function ContactController($log) {

  angular.extend(this, {

    test: 'Contact'
  });
}

angular
.module('routing')
.controller('ContactController', ['$log', ContactController]);
