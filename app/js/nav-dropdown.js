!(() => {
  const
    footer      = document.getElementById('footer'),
    dropbtn     = document.getElementById('dropbtn'),
    navRight    = document.getElementById('nav-right')

  // Hide the footer and navRight when the dropbtn is clicked, else show them
  dropbtn.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.id === 'nav-left') {
      x.id = 'responsive'
      footer.className = 'hidden'
      navRight.className = 'hidden'
    } else {
      x.id = 'nav-left'
      dropbtn.className = 'visible'
      navRight.className = 'visible'
    }
  }
})()
