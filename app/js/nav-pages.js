!(() => {

  const          contact = document.getElementById('contact')
  const         graphics = document.getElementById('graphics')
  const             home = document.getElementById('home')
  const       navContact = document.getElementById('nav-contact')
  const      navGraphics = document.getElementById('nav-graphics')
  const          navHome = document.getElementById('nav-home')
  const   navPrintmaking = document.getElementById('nav-printmaking')
  const   navPhotography = document.getElementById('nav-photography')
  const        navVideos = document.getElementById('nav-videos')
  const      photography = document.getElementById('photography')
  const      printmaking = document.getElementById('printmaking')
  const           videos = document.getElementById('videos')

  // Set these divs to display none at default
  contact.style.display = "none"
  graphics.style.display = "none"
  photography.style.display = "none"
  printmaking.style.display = "none"
  videos.style.display = "none"

  // When nav-contact is clicked, hide all but contact
  navContact.onclick = () => {
    contact.style.display = "block"
    graphics.style.display = "none"
    home.style.display = "none"
    photography.style.display = "none"
    printmaking.style.display = "none"
    videos.style.display = "none"
  }

  // When nav-contact is clicked, hide all but graphics
  navGraphics.onclick = () => {
    contact.style.display = "none"
    graphics.style.display = "block"
    home.style.display = "none"
    photography.style.display = "none"
    printmaking.style.display = "none"
    videos.style.display = "none"
  }

  // When nav-home is clicked, hide all but home
  navHome.onclick = () => {
    contact.style.display = "none"
    graphics.style.display = "none"
    home.style.display = "block"
    photography.style.display = "none"
    printmaking.style.display = "none"
    videos.style.display = "none"
  }

  // When nav-photography is clicked, hide all but photography
  navPhotography.onclick = () => {
    contact.style.display = "none"
    graphics.style.display = "none"
    home.style.display = "none"
    photography.style.display = "block"
    printmaking.style.display = "none"
    videos.style.display = "none"
  }

  // When nav-printmaking is clicked, hide all but printmaking
  navPrintmaking.onclick = () => {
    contact.style.display = "none"
    graphics.style.display = "none"
    home.style.display = "none"
    photography.style.display = "none"
    printmaking.style.display = "block"
    videos.style.display = "none"
  }

  // When nav-videos is clicked, hide all but videos
  navVideos.onclick = () => {
    contact.style.display = "none"
    graphics.style.display = "none"
    home.style.display = "none"
    photography.style.display = "none"
    printmaking.style.display = "none"
    videos.style.display = "block"
  }
})()
