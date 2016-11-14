$(document).on('click', '.nav-photo', function() { // Show clicked selection's respective data-click

  var photoNav = $(this).attr('data-click');
  var photoNavSib = $(this).siblings().attr('data-click');
  $('#'+photoNav).show();
  $('#'+photoNavSib).hide();

  // Underline selected of .nav-photo
  $(this).addClass('underline');
  $(this).siblings().removeClass('underline');
});
