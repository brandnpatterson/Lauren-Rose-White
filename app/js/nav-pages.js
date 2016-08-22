!(() => {

  const contact = document.getElementById('contact')
  const graphics = document.getElementById('graphics')
  const home = document.getElementById('home')
  const photography = document.getElementById('photography')
  const printmaking = document.getElementById('printmaking')
  const videos = document.getElementById('videos')

  const navContact = document.getElementById('nav-contact')
  const navGraphics = document.getElementById('nav-graphics')
  const navHome = document.getElementById('nav-home')
  const navPrintmaking = document.getElementById('nav-printmaking')
  const navPhotography = document.getElementById('nav-photography')
  const navVideos = document.getElementById('nav-videos')

  //Hide all but contact when the contact button is clicked
  navContact.onclick = () => {
    contact.setAttribute('class', 'visible')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'hidden')
  }

  // Hide all but graphics when the graphics button is clicked
  navGraphics.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'visible')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'hidden')
  }

  // Hide all but home when the home button is clicked
  navHome.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'visible')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'hidden')
  }

  // Hide all but photography when the photography button is clicked
  navPhotography.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'visible')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'hidden')
  }

  // Hide all but printmaking when the printmaking button is clicked
  navPrintmaking.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'visible')
    videos.setAttribute('class', 'hidden')
  }

  // Hide all but videos when the videos button is clicked
  navVideos.onclick = () => {
    contact.setAttribute('class', 'hidden')
    graphics.setAttribute('class', 'hidden')
    home.setAttribute('class', 'hidden')
    photography.setAttribute('class', 'hidden')
    printmaking.setAttribute('class', 'hidden')
    videos.setAttribute('class', 'visible')
  }
})()
