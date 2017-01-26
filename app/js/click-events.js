/**
 * Controls the styling on click of the Sub-Navigation on the Photography View
 */

import $ from 'jquery';

!function clickEvents() {

  /*  Dynamically used const declared without jQuery selection. Used with the DOM at bottom of page */
  const $closeBtn   = '.closebtn',
        $getModal   = '.get-modal',
        $navPhoto   = '.nav-photo',
        $responsive = '.responsive';

  // CacheDOM
  const $content  = $('#content'),
        $document = $(document),
        $dropBtn  = $('#dropBtn'),
        $footer   = $('footer'),
        $navLeft  = $('#nav-left'),
        $navRight = $('#nav-right');

  // When .closebtn is clicked, close all modals
  const closeBtn = function() {
    $('.modal').fadeOut();
  }

  // Open Modal depending on which data-click is clicked
  const getModal = function() {
    const modalId = $(this).attr('data-click');
    $('#'+modalId).fadeIn();
  }

  // Toggle showing photos of the divs one at a time
  const navPhoto = function() {
    const navPhoto = $(this).attr('data-click'),
          navPhotoSib = $(this).siblings().attr('data-click');

    $('#'+navPhoto).show();
    $('#'+navPhotoSib).hide();
    $(this).addClass('underline');
    $(this).siblings().removeClass('underline');
  }

  // Click .responsive -- makes dropbtn click
  const responsive = function() {
    $dropBtn.click();
  }

  const dropBtn = function() {
    $content.toggle();
    $footer.toggle();
    $navLeft.toggle();
    /* responsive class Created here for closing nav-right on mobile only */
    $navRight.toggle().toggleClass('responsive');
    $dropBtn.toggleClass('dropBtnChange');
  }

  /* Explicitely not dynamic because it is on index.html */
  $dropBtn.on('click', dropBtn);

  // Dynamic click lick event logic specified with $document
  function click(x, y) {
    $document.on('click', x, y);
  }

  // Dynamic Click Events
  click($closeBtn, closeBtn);
  click($getModal, getModal);
  click($navPhoto, navPhoto);
  click($responsive, responsive);
}();
