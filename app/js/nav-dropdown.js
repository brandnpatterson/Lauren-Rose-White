!(() => {

const       contact = document.getElementById('contact')
const        footer = document.getElementById('footer')
const      graphics = document.getElementById('graphics')
const       dropbtn = document.getElementById('dropbtn')
const      navRight = document.getElementById('nav-right')
const   photography = document.getElementById('photography')
const   printmaking = document.getElementById('printmaking')
const        videos = document.getElementById('videos')

  // When dropbtn is clicked,
  dropbtn.onclick = () => {
    let x = document.getElementById('nav-left')
    // If nav-left has the class of nav-left, make its only id responsive
    // Give the following divs the class of visible
    if (x.id === 'nav-left') {
      x.id = 'responsive'
      contact.setAttribute('class', 'hidden')
      footer.setAttribute('class', 'hidden')
      graphics.setAttribute('class', 'hidden')
      home.setAttribute('class', 'hidden')
      dropbtn.setAttribute('class', 'hidden')
      navRight.setAttribute('class', 'hidden')
      photography.setAttribute('class', 'hidden')
      printmaking.setAttribute('class', 'hidden')
      videos.setAttribute('class', 'hidden')

    } else {
      // Give the following divs the class of visible
      x.id = 'nav-left'
      contact.setAttribute('class', 'visible')
      footer.setAttribute('class', 'visible')
      graphics.setAttribute('class', 'visible')
      home.setAttribute('class', 'visible')
      dropbtn.setAttribute('class', 'visible')
      navRight.setAttribute('class', 'visible')
      photography.setAttribute('class', 'visible')
      printmaking.setAttribute('class', 'visible')
      videos.setAttribute('class', 'visible')
    }
  }
})()
