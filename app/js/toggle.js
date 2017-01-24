/**
 * Controls the styling on click of the Sub-Navigation on the Photography View
 */

import $ from 'jquery';

!function toggleInit() {

  // cacheDOM
  let $content  = $('#content'),
      $document = $(document),
      $dropBtn  = $('#dropbtn'),
      $footer   = $('footer'),
      $navLeft  = $('#nav-left'),
      $navRight = $('#nav-right'),

  // When .closebtn is clicked, close all modals
  closeBtn = function() {
    $('.modal').fadeOut();
  }

  // Open Modal depending on which data-click is clicked
  getModal = function() {
    let modalId = $(this).attr('data-click');
    $('#'+modalId).fadeIn();
  }

  // Toggle showing photos of the divs one at a time
  photoNav = function() {
    let photoNav = $(this).attr('data-click'),
        photoNavSib = $(this).siblings().attr('data-click');

    $('#'+photoNav).show();
    $('#'+photoNavSib).hide();
    $(this).addClass('underline');
    $(this).siblings().removeClass('underline');
  }

  // Click .responsive -- makes dropbtn click
  responsiveClose = function() {
    $dropBtn.click();
  }

  responsive = function() {
    $content.toggle();
    $footer.toggle();
    $navLeft.toggle();
    /* responsive class Created here for closing nav-right on mobile only */
    $navRight.toggle().toggleClass('responsive');
    this.classList.toggle('dropBtnChange');
  }

  // Events
  $document.on('click', '.closebtn', closeBtn);
  $document.on('click', '.get-modal', getModal);
  $document.on('click', '.nav-photo', photoNav);
  $document.on('click', '.responsive', responsiveClose);
  $dropBtn.click(toggle.responsive);
}();
