$(document).on('click', '.nav-photo', () => { // Show clicked selection's respective data-click
  var $this = this                                 // Hide all siblings data-click content
  var photoNav = $($this).attr('data-click')
  var photoNavSib = $($this).siblings().attr('data-click')
  $('#'+photoNav).show()
  $('#'+photoNavSib).hide()

  // Underline selected of .nav-photo
  $($this).addClass('underline')
  $($this).siblings().removeClass('underline')
})
