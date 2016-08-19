!(() => {

  const imgDropdown = document.getElementById('imgDropdown')

  imgDropdown.onclick = () => {
    let x = document.getElementById('nav-left')
    if (x.className === 'left-default') {
      x.className = 'responsive'
    } else {
      x.className = 'left-default'
    }
  }
})()
