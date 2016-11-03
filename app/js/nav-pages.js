!(() => {

  const
    contact        = document.getElementById("contact"),
    graphics       = document.getElementById("graphics"),
    home           = document.getElementById("home"),
    navContact     = document.getElementById("nav-contact"),
    navGraphics    = document.getElementById("nav-graphics"),
    navHome        = document.getElementById("nav-home"),
    navPrintmaking = document.getElementById("nav-printmaking"),
    navPhotography = document.getElementById("nav-photography"),
    navVideos      = document.getElementById("nav-videos"),
    photography    = document.getElementById("photography"),
    printmaking    = document.getElementById("printmaking"),
    videos         = document.getElementById("videos")

  // Set these divs to display none at default
  contact.className = "hidden"
  graphics.className = "hidden"
  photography.className = "hidden"
  printmaking.className = "hidden"
  videos.className = "hidden"

  // When nav-contact is clicked, hide all but contact
  navContact.onclick = () => {
    contact.className = "visible"
    graphics.className = "hidden"
    home.className = "hidden"
    photography.className = "hidden"
    printmaking.className = "hidden"
    videos.className = "hidden"
  }

  // When nav-contact is clicked, hide all but graphics
  navGraphics.onclick = () => {
    contact.className = "hidden"
    graphics.className = "visible"
    home.className = "hidden"
    photography.className = "hidden"
    printmaking.className = "hidden"
    videos.className = "hidden"
  }

  // When nav-home is clicked, hide all but home
  navHome.onclick = () => {
    contact.className = "hidden"
    graphics.className = "hidden"
    home.className = "visible"
    photography.className = "hidden"
    printmaking.className = "hidden"
    videos.className = "hidden"
  }

  // When nav-photography is clicked, hide all but photography
  navPhotography.onclick = () => {
    contact.className = "hidden"
    graphics.className = "hidden"
    home.className = "hidden"
    photography.className = "visible"
    printmaking.className = "hidden"
    videos.className = "hidden"
  }

  // When nav-printmaking is clicked, hide all but printmaking
  navPrintmaking.onclick = () => {
    contact.className = "hidden"
    graphics.className = "hidden"
    home.className = "hidden"
    photography.className = "hidden"
    printmaking.className = "visible"
    videos.className = "hidden"
  }

  // When nav-videos is clicked, hide all but videos
  navVideos.onclick = () => {
    contact.className = "hidden"
    graphics.className = "hidden"
    home.className = "hidden"
    photography.className = "hidden"
    printmaking.className = "hidden"
    videos.className = "visible"
  }
})()
