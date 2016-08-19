!(() => {

  const navClose = document.getElementById('nav-close')
  const navLeft = document.getElementById('nav-left')

  navClose.onclick = () => {

    return navLeft()
  }

  navLeft.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.className === 'left-default') {
      x.className += 'responsive'
    } else {
      x.className = 'left-default'
    }
  }
})()

!(() => {

  const imgDropdown = document.getElementById('imgDropdown')

  imgDropdown.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.className === 'left-default') {
      x.className = 'responsive'
    } else {
      x.className = 'left-default'
    }
  }
})()

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

!(() => {

  const people = document.getElementById('people')
  const nature = document.getElementById('nature')

  const navPeople = document.getElementById('nav-people')
  const navNature = document.getElementById('nav-nature')

  navPeople.onclick = () => {
    nature.setAttribute('class', 'hidden')
    people.setAttribute('class', 'visible')
    navPeople.setAttribute('class', 'underline')
    navNature.setAttribute('class', 'not-underlined')
  }

  navNature.onclick = () => {
      people.setAttribute('class', 'hidden')
      nature.setAttribute('class', 'visible')
      navNature.setAttribute('class', 'underline')
      navPeople.setAttribute('class', 'not-underlined')
  }
})()
