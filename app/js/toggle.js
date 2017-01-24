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
      $modal    = $('.modal'),
      $navLeft  = $('#nav-left'),
      $navRight = $('#nav-right'),
      // create new Object
      toggle    = {};

  // When .closebtn is clicked, close all modals
  toggle.closeBtn = () => $modal.fadeOut();

  // Open Modal depending on which data-click is clicked
  toggle.getModal = function() {
    let modalId = $(this).attr('data-click');
    $('#'+modalId).fadeIn();
  }

  // Toggle showing photos of the divs one at a time
  toggle.photoNav = function() {
    let photoNav = $(this).attr('data-click'),
        photoNavSib = $(this).siblings().attr('data-click');

    $('#'+photoNav).show();
    $('#'+photoNavSib).hide();
    $(this).addClass('underline');
    $(this).siblings().removeClass('underline');
  }

  // Click .responsive -- makes dropbtn click
  toggle.responsiveClose = function() {
    $dropBtn.click();
  }

  toggle.responsive = function() {
    $content.toggle();
    $footer.toggle();
    $navLeft.toggle();
    /* responsive class Created here for closing nav-right on mobile only */
    $navRight.toggle().toggleClass('responsive');
    this.classList.toggle('dropBtnChange');
  }

  // Events
  $document.on('click', '.closebtn', toggle.closeBtn);
  $document.on('click', '.get-modal', toggle.getModal);
  $document.on('click', '.nav-photo', toggle.photoNav);
  $document.on('click', '.responsive', toggle.responsiveClose);
  $dropBtn.click(toggle.responsive);
}();
