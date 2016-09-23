!(() => {

  const                   footer = document.getElementById("footer")
  const          modalClosePrint = document.getElementById("modal-close-print")
  const               modalPrint = document.getElementById("modal-printmaking")
  const         modalShellsPrint = document.getElementById("modal-shells-print")
  const              shellsPrint = document.getElementById("shells-print")

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
