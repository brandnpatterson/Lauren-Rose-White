/**
 * Controls the styling on click of the Sub-Navigation on the Photography View
 */

var $ = require('jquery');

!function toggleInit() {

  // cacheDOM
  var $content  = $('#content');
  var $document = $(document);
  var $dropBtn  = $('#dropbtn');
  var $footer   = $('footer');
  var $navLeft  = $('#nav-left');
  var $navRight = $('#nav-right');

  // create new Object
  var toggle = {};

  // When .closebtn is clicked, close all modals
  toggle.closeBtn = function() {
    $('.modal').fadeOut();
  }

  // Open Modal depending on which data-click is clicked
  toggle.getModal = function() {
    var $this = this;
    var modalId = $($this).attr('data-click');
    $('#'+modalId).fadeIn();
  }

  // Toggle showing photos of the divs one at a time
  toggle.photoNav = function() {
    var photoNav = $(this).attr('data-click');
    var photoNavSib = $(this).siblings().attr('data-click');

    $('#'+photoNav).show();
    $('#'+photoNavSib).hide();
    $(this).addClass('underline');
    $(this).siblings().removeClass('underline');
  }

  // Click .responsive -- makes dropbtn click
  toggle.responsiveClick = function() {
    $dropBtn.click();
  }

  // Created class for mobile nav
  toggle.responsive = function() {
    $content.toggle();
    $footer.toggle();
    $navLeft.toggle();
    $navRight.toggle().toggleClass('responsive');
    this.classList.toggle('dropBtnChange');
  }

  // Events
  $document.on('click', '.closebtn', toggle.closeBtn);
  $document.on('click', '.get-modal', toggle.getModal);
  $document.on('click', '.nav-photo', toggle.photoNav);
  $document.on('click', '.responsive', toggle.responsiveClick);
  $dropBtn.click(toggle.responsive);
}();
