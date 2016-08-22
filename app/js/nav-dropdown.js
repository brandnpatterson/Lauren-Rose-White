!(() => {

  const imgDropdown = document.getElementById('imgDropdown')

  imgDropdown.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.className === 'nav-left') {
      x.className = 'responsive'
    } else {
      x.className = 'nav-left'
    }
  }

})()
