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

"use strict";!function(){var t=document.getElementById("nav-close"),e=document.getElementById("nav-left");t.onclick=function(){return e()},e.onclick=function(){var t=document.getElementById("nav-left");"left-default"===t.className?t.className+="responsive":t.className="left-default"}}(),!function(){var t=document.getElementById("imgDropdown");t.onclick=function(){var t=document.getElementById("nav-left");"left-default"===t.className?t.className="responsive":t.className="left-default"}}(),!function(){var t=document.getElementById("contact"),e=document.getElementById("graphics"),s=document.getElementById("home"),n=document.getElementById("photography"),i=document.getElementById("printmaking"),d=document.getElementById("videos"),c=document.getElementById("nav-contact"),l=document.getElementById("nav-graphics"),u=document.getElementById("nav-home"),a=document.getElementById("nav-printmaking"),r=document.getElementById("nav-photography"),o=document.getElementById("nav-videos");c.onclick=function(){t.setAttribute("class","visible"),e.setAttribute("class","hidden"),s.setAttribute("class","hidden"),n.setAttribute("class","hidden"),i.setAttribute("class","hidden"),d.setAttribute("class","hidden")},l.onclick=function(){t.setAttribute("class","hidden"),e.setAttribute("class","visible"),s.setAttribute("class","hidden"),n.setAttribute("class","hidden"),i.setAttribute("class","hidden"),d.setAttribute("class","hidden")},u.onclick=function(){t.setAttribute("class","hidden"),e.setAttribute("class","hidden"),s.setAttribute("class","visible"),n.setAttribute("class","hidden"),i.setAttribute("class","hidden"),d.setAttribute("class","hidden")},r.onclick=function(){t.setAttribute("class","hidden"),e.setAttribute("class","hidden"),s.setAttribute("class","hidden"),n.setAttribute("class","visible"),i.setAttribute("class","hidden"),d.setAttribute("class","hidden")},a.onclick=function(){t.setAttribute("class","hidden"),e.setAttribute("class","hidden"),s.setAttribute("class","hidden"),n.setAttribute("class","hidden"),i.setAttribute("class","visible"),d.setAttribute("class","hidden")},o.onclick=function(){t.setAttribute("class","hidden"),e.setAttribute("class","hidden"),s.setAttribute("class","hidden"),n.setAttribute("class","hidden"),i.setAttribute("class","hidden"),d.setAttribute("class","visible")}}(),!function(){var t=document.getElementById("people"),e=document.getElementById("nature"),s=document.getElementById("nav-people"),n=document.getElementById("nav-nature");s.onclick=function(){e.setAttribute("class","hidden"),t.setAttribute("class","visible"),s.setAttribute("class","underline"),n.setAttribute("class","not-underlined")},n.onclick=function(){t.setAttribute("class","hidden"),e.setAttribute("class","visible"),n.setAttribute("class","underline"),s.setAttribute("class","not-underlined")}}();
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
