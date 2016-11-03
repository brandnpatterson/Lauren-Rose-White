!(() => {

  const
    catWhiteHome      = document.getElementById("cat-white-home"),
    modalCloseHome    = document.getElementById("modal-close-home"),
    flowers           = document.getElementById("flowers"),
    footer            = document.getElementById("footer"),
    leaf              = document.getElementById("leaf"),
    modalHome         = document.getElementById("modal-home"),
    modalCatWhiteHome = document.getElementById("modal-cat-white-home"),
    modalLeaf         = document.getElementById("modal-leaf"),
    modalFlowers      = document.getElementById("modal-flowers")

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
