!(() => {
  const          contact = document.getElementById("contact")
  const         graphics = document.getElementById("graphics")
  const             home = document.getElementById("home")
  const       navContact = document.getElementById("nav-contact")
  const      navGraphics = document.getElementById("nav-graphics")
  const          navHome = document.getElementById("nav-home")
  const   navPrintmaking = document.getElementById("nav-printmaking")
  const   navPhotography = document.getElementById("nav-photography")
  const        navVideos = document.getElementById("nav-videos")
  const      photography = document.getElementById("photography")
  const      printmaking = document.getElementById("printmaking")
  const           videos = document.getElementById("videos")

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
