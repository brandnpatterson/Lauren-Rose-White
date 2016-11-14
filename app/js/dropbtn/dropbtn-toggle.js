$('#dropbtn').click( function() { // Click dropbtn - toggle the following
  $('#nav-right').toggle().toggleClass('responsive'); // Created class for mobile nav
  $('#nav-left').toggle();
  $('#content').toggle();
  $('footer').toggle();
});

$(document).on('click', '.responsive', function() { // Click .responsive -- makes dropbtn click
  $('#dropbtn').click();
});
