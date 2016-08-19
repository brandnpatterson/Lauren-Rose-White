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
