$(document).on('click', '.closebtn', function() { // When .closebtn is clicked, close all modals
  $('.modal').hide()
})

$(document).on('click', '.get-modal', function() { // Open Modal depending on which data-click is clicked
  var $this = this
  var modalId = $($this).attr('data-click')
  $('#'+modalId).toggle()
})
