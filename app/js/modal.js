$(document).ready(function(){


  $(document).on('click', '.closebtn', function(){ // Close all modals
    $('#modal01, #modal02, #modal03, #modal04, #modal05, #modal06, #modal06, #modal07, #modal08, #modal09, #modal10, #modal11, #modal12, #modal13, #modal14, #modal15, #modal16, #modal 17, #modal18, #modal19, #modal20').hide()
  })


  $(document).on('click', '.get-modal', function(){ // Open Modal depending on which data-click is clicked
    var $this = this
    var modalId = $($this).attr('data-click')
    $('#'+modalId).toggle()
  })
})
