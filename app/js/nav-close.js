!(() => {

  const
    dropbtn  = document.getElementById('dropbtn'),
    footer   = document.getElementById('footer'),
    navClose = document.getElementById('nav-close'),
    navLeft  = document.getElementById('nav-left'),
    navRight = document.getElementById('nav-right')

  // If nav-left is clicked and has the class of responsive, change it's class to to nav-left
  // Make the nav-right, home, and dropbtn visible
  navLeft.onclick = () => {
    let i = document.getElementById('responsive')
    if (i.id === 'responsive') {
      i.id = 'nav-left'
      dropbtn.className = 'visible'
      footer.className = 'visible'
      navRight.className = 'visible'
    }
  }

  $(document).on('click', '#home', function(){
    let i = document.getElementById('responsive')
    if (i.id === 'nav-left') {
      i.id = 'responsive'
    } else {
      i.id = 'nav-left'
      home.className = 'visible'
      dropbtn.className = 'visible'
      footer.className = 'visible'
      navRight.className = 'visible'
    }
  })
})()
