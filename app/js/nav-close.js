!(() => {

  const navClose = document.getElementById('nav-close')
  const navLeft = document.getElementById('nav-left')

  navClose.onclick = () => {

    return navLeft()
  }

  navLeft.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.className === 'nav-left') {
      x.className += 'responsive'
    } else {
      x.className = 'nav-left'
    }
  }
})()
