/**
 * Toggles from the DropBtn and the Responsive Menu
 */

// global
var $document = $(document);

var DropBtn = (function() {

  // cacheDOM
  var $content  = $('#content');
  var $dropBtn  = $('#dropbtn');
  var $footer   = $('footer');
  var $navLeft  = $('#nav-left');
  var $navRight = $('#nav-right');

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
    this.classList.toggle('change');
  }
})();
