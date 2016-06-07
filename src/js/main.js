/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function getDropdown() {
    document.getElementById("myDropdown").classList.toggle("show")
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function() {
  $(".nature").hide();

  $(".switch").click(function() {
    $(".nature").show(), $(".people").hide()
  })

  $(".current").click(function() {
    $(".nature").hide(), $(".people").show()
  })

  $(".current").css("font-weight", "bold");

  $(".switch").click(function() {
    $(".current").css("font-weight", "normal"),
    $(".switch").css("font-weight", "bold")
  })

  $(".current").click(function() {
      $(".switch").css("font-weight", "normal"),
      $(".current").css("font-weight", "bold")
  })
});
