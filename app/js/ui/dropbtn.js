/**
 * Toggles from the DropBtn and the Responsive Menu
**/

var $ = require('jquery');

var DropBtn = (function() {

  // cacheDOM
  var $content  = $('#content');
  var $document = $(document);
  var $dropBtn  = $('#dropbtn');
  var $footer   = $('footer');
  var $navLeft  = $('#nav-left');
  var $navRight = $('#nav-right');
  var $ngScope = $('.ng-scope');

  // bind events
  $dropBtn.click(toggle);
  $document.on('click', '.responsive', responsive);

  function responsive() { // Click .responsive -- makes dropbtn click
    $dropBtn.click();
  }

  function toggle() {
    $content.toggle();
    $footer.toggle();
    $navLeft.toggle();
    $navRight.toggle().toggleClass('responsive'); // Created class for mobile nav
    $ngScope.toggle();
    this.classList.toggle('change');
  }
})();
