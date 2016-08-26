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
      contact.style.display = "none"
      footer.style.display = "none"
      graphics.style.display = "none"
      home.style.display = "none"
      dropbtn.style.display = "none"
      navRight.style.display = "none"
      photography.style.display = "none"
      printmaking.style.display = "none"
      videos.style.display = "none"

    } else {
      // Give the following divs the class of visible
      x.id = 'nav-left'
      contact.style.display = "block"
      footer.style.display = "block"
      graphics.style.display = "block"
      home.style.display = "block"
      dropbtn.style.display = "block"
      navRight.style.display = "block"
      photography.style.display = "block"
      printmaking.style.display = "block"
      videos.style.display = "block"
    }
  }
})()
