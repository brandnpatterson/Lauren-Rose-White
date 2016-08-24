!(() => {

const       home = document.getElementById('home')
const    dropbtn = document.getElementById('dropbtn')
const     footer = document.getElementById('footer')
const   navClose = document.getElementById('nav-close')
const    navLeft = document.getElementById('nav-left')
const   navRight = document.getElementById('nav-right')

  // If nav-close is clicked and has the class of responsive, change it's class to nav-left
  // Make the nav-right, home, and dropbtn visible
  navClose.onclick = () => {
    let x = document.getElementById('responsive')
    if (x.id === 'nav-left') {
      x.id = 'responsive'
    } else {
      x.id = 'nav-left'
      navRight.setAttribute('class', 'visible')
      home.setAttribute('class', 'visible')
      dropbtn.setAttribute('class', 'visible')
    }
  }

  // If nav-left is clicked and has the class of responsive, change it's class to to nav-left
  // Make the nav-right, home, and dropbtn visible
  navLeft.onclick = () => {
    let x = document.getElementById('responsive')
    if (x.id === 'responsive') {
      x.id = 'nav-left'
      navRight.setAttribute('class', 'visible')
      dropbtn.setAttribute('class', 'visible')
      footer.setAttribute('class', 'visible')
    }
  }
})()
