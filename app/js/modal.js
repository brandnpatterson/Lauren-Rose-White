/**
 * Controls the opening and closing of Modals
 */

var Modal = (function() {

  // bind events
  $document.on('click', '.get-modal', getModal);
  $document.on('click', '.closebtn', closeBtn);

  function closeBtn() { // When .closebtn is clicked, close all modals
    $('.modal').hide();
  }

  function getModal() { // Open Modal depending on which data-click is clicked
    var $this = this;
    var modalId = $($this).attr('data-click');
    $('#'+modalId).toggle();
  }
})();
