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

  // When nav-contact is clicked, hide all but contact
  navContact.onclick = () => {
    contact.setAttribute('class', 'visible')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'hidden')
  }

  // When nav-contact is clicked, hide all but graphics
  navGraphics.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'visible')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'hidden')
  }

  // When nav-home is clicked, hide all but home
  navHome.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'visible')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'hidden')
  }

  // When nav-photography is clicked, hide all but photography
  navPhotography.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'visible')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'hidden')
  }

  // When nav-printmaking is clicked, hide all but printmaking
  navPrintmaking.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'visible')
    videos.setAttribute('class', 'hidden')
  }

  // When nav-videos is clicked, hide all but videos
  navVideos.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'visible')
  }
})()
