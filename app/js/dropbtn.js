function myFunction(x) {
  x.classList.toggle('change')
}

$('#dropbtn').click(function() {
  $('#nav-left').toggle()
  $('#nav-right').toggle()
  $('#content').toggle()
  $('footer').toggle()
})

$('#nav-left').click(function() {
  $('#dropbtn').click()
})
