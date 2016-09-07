!(() => {

  const         catWhiteHome = document.getElementById("cat-white-home")
  const       modalCloseHome = document.getElementById("modal-close-home")
  const              flowers = document.getElementById("flowers")
  const               footer = document.getElementById("footer")
  const                 leaf = document.getElementById("leaf")
  const            modalHome = document.getElementById("modal-home")
  const    modalCatWhiteHome = document.getElementById("modal-cat-white-home")
  const            modalLeaf = document.getElementById("modal-leaf")
  const         modalFlowers = document.getElementById("modal-flowers")

  catWhiteHome.onclick = () => {
    footer.style.display = "none"
    modalCatWhiteHome.style.display = "block"
    modalHome.style.display = "block"
    modalCloseHome.style.display = "block"
  }

  flowers.onclick = () => {
    footer.style.display = "none"
    modalFlowers.style.display = "block"
    modalHome.style.display = "block"
    modalCloseHome.style.display = "block"
  }

  leaf.onclick = () => {
    footer.style.display = "none"
    modalLeaf.style.display = "block"
    modalHome.style.display = "block"
    modalCloseHome.style.display = "block"
  }

  modalCloseHome.onclick = () => {
    footer.style.display = "block"
    modalHome.style.display = "none"
    modalLeaf.style.display = "none"
    modalFlowers.style.display = "none"
  }

  modalHome.onclick = () => {
    footer.style.display = "block"
    modalHome.style.display = "none"
    modalCatWhiteHome.style.display = "none"
    modalFlowers.style.display = "none"
    modalLeaf.style.display = "none"
  }
})()
