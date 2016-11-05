$(document).ready(function(){

  //    Close all modals    //
  $(document).on('click', '.closebtn', function(){
    $('#modal01, #modal02, #modal03, #modal04, #modal05, #modal06, #modal06, #modal07, #modal08, #modal09, #modal10, #modal11, #modal12, #modal13, #modal14, #modal15, #modal16, #modal 17, #modal18, #modal19, #modal20').hide()
  })

  //    Open Modal - Home #img01-03   //
  $(document).on('click', '.img-click', function(){
    var $this = this
    var modalId = $($this).attr('data-click')
    $('#'+modalId).toggle()
  })
})
