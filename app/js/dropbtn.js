function myFunction(x) {
  x.classList.toggle('change')
}

$('#dropbtn').click(function() { // Click dropbtn - toggle the following
  $('#nav-left').toggle().toggleClass('responsive') // Created class for mobile nav
  $('#nav-right').toggle()
  $('#content').toggle()
  $('footer').toggle()
})

$(document).on('click', '.responsive', function() { // Click .responsive -- makes dropbtn click
  $('#dropbtn').click()
})
