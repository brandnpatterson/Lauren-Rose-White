$(document).ready(function(){
  // Underline People and show it, remove underline from Nature and hide it
  $(document).on('click', '#nav-people', function(){
    var $this = this
    $(this).addClass('underline')
    $('#nav-nature').removeClass('underline')
    $('#nature').hide()
    $('#people').show()
  })

  // Underline Nature and show it, remove underline from People and hide it
  $(document).on('click', '#nav-nature', function(){
    var $this = this
    $(this).addClass('underline')
    $('#nav-people').removeClass('underline')
    $('#nature').show()
    $('#people').hide()
  })
})()
