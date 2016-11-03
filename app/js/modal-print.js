!(() => {

  const
    footer           = document.getElementById("footer"),
    modalClosePrint  = document.getElementById("modal-close-print"),
    modalPrint       = document.getElementById("modal-printmaking"),
    modalShellsPrint = document.getElementById("modal-shells-print"),
    shellsPrint      = document.getElementById("shells-print")

  shellsPrint.onclick = () => {
    footer.style.display = "none"
    modalPrint.style.display = "block"
    modalShellsPrint.style.display = "block"
  }

  modalClosePrint.onclick = () => {
    footer.style.display = "block"
    modalPrint.style.display = "none"
    modalShellsPrint.style.display = "none"
  }

  modalPrint.onclick = () => {
    footer.style.display = "block"
    modalPrint.style.display = "none"
    modalShellsPrint.style.display = "none"
  }
})()
