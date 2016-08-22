!(() => {

  const navClose = document.getElementById('nav-close')
  const navLeft = document.getElementById('nav-left')

  navClose.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.className === 'nav-left') {
      x.className = 'responsive'
    } else {
      x.className = 'nav-left'
    }
  }

  // If nav-left is clicked and has the class of responsive, change it's class to to nav-left
  navLeft.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.className === 'responsive') {
      x.className = 'nav-left'
    }
  }
})()
