!(() => {

  const
    home     = document.getElementById("home"),    
    dropbtn  = document.getElementById("dropbtn"),     
    footer   = document.getElementById("footer"),   
    navClose = document.getElementById("nav-close"),    
    navLeft  = document.getElementById("nav-left"),   
    navRight = document.getElementById("nav-right")

  // If nav-close is clicked and has the class of responsive, change it's class to nav-left
  // Make the nav-right, home, and dropbtn visible
  navClose.onclick = () => {
    let x = document.getElementById("responsive")
    if (x.id === "nav-left") {
      x.id = "responsive"
    } else {
      x.id = "nav-left"
      home.className = "visible"
      dropbtn.className = "visible"
      footer.className = "visible"
      navRight.className = "visible"
    }
  }

  // If nav-left is clicked and has the class of responsive, change it's class to to nav-left
  // Make the nav-right, home, and dropbtn visible
  navLeft.onclick = () => {
    let x = document.getElementById("responsive")
    if (x.id === "responsive") {
      x.id = "nav-left"
      dropbtn.className = "visible"
      footer.className = "visible"
      navRight.className = "visible"
    }
  }
})()
