/**
 * Controls the styling on click of the Sub-Navigation on the Photography View
 */

var Photography = (function() {

  // bind events
  $document.on('click', '.nav-photo', photography);

  function photography() { // Show clicked selection's respective data-click
    var photoNav = $(this).attr('data-click');
    var photoNavSib = $(this).siblings().attr('data-click');
    $('#'+photoNav).show();
    $('#'+photoNavSib).hide();

    // Underline selected of .nav-photo
    $(this).addClass('underline');
    $(this).siblings().removeClass('underline');
  }
})();
