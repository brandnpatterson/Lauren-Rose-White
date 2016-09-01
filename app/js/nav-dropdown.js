!(() => {

  const       contact = document.getElementById("contact")
  const        footer = document.getElementById("footer")
  const      graphics = document.getElementById("graphics")
  const       dropbtn = document.getElementById("dropbtn")
  const          home =  document.getElementById("home")
  const      navRight = document.getElementById("nav-right")
  const   photography = document.getElementById("photography")
  const   printmaking = document.getElementById("printmaking")
  const        videos = document.getElementById("videos")

  // When dropbtn is clicked,
  dropbtn.onclick = () => {
    let x = document.getElementById("nav-left")
    // If nav-left has the class of nav-left, make its only id responsive
    // Give the following divs the class of visible
    if (x.id === "nav-left") {
      x.id = "responsive"
      contact.className = "hidden"
      footer.className = "hidden"
      graphics.className = "hidden"
      home.className = "visible"
      dropbtn.className = "hidden"
      navRight.className = "hidden"
      photography.className = "hidden"
      printmaking.className = "hidden"
      videos.className = "hidden"
    } else {
      // Give the following divs the class of visible
      x.id = "nav-left"
      contact.className = "visible"
      footer.className = "visible"
      graphics.className = "visible"
      home.className = "visible"
      dropbtn.className = "visible"
      navRight.className = "visible"
      photography.className = "visible"
      printmaking.className = "visible"
      videos.className = "visible"
    }
  }
})()
