!(() => {

  const imgDropdown = document.getElementById('imgDropdown')

  const contact = document.getElementById('contact')
  const graphics = document.getElementById('graphics')
  const home = document.getElementById('home')
  const photography = document.getElementById('photography')
  const printmaking = document.getElementById('printmaking')
  const videos = document.getElementById('videos')

  imgDropdown.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.className === 'nav-left') {
      x.className = 'responsive'
      contact.setAttribute('class', 'hidden')
      graphics.setAttribute('class', 'hidden')
      home.setAttribute('class', 'hidden')
      photography.setAttribute('class', 'hidden')
      printmaking.setAttribute('class', 'hidden')
      videos.setAttribute('class', 'hidden')

    } else {
      x.className = 'nav-left'
      contact.setAttribute('class', 'visible')
      graphics.setAttribute('class', 'visible')
      home.setAttribute('class', 'visible')
      photography.setAttribute('class', 'visible')
      printmaking.setAttribute('class', 'visible')
      videos.setAttribute('class', 'visible')
    }
  }

})()
