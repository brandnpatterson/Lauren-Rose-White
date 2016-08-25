!(() => {

  const           footer = document.getElementById('footer')
  const           guitar = document.getElementById('guitar')
  const             hand = document.getElementById('hand')
  const            modal = document.getElementById('modal')
  const       modalClose = document.getElementsByClassName('modal-close')[0]
  const        modalGuitar = document.getElementById('modal-guitar')
  const        modalHand = document.getElementById('modal-hand')
  const     modalPeacoat = document.getElementById('modal-peacoat')
  const          peacoat = document.getElementById('peacoat')

  // When guitar is clicked, the footer's display is set to none and the modal-guitar's display is set to block
  guitar.onclick = () => {
    footer.style.display = "none"
    modal.style.display = "block"
    modalGuitar.style.display = "block"
    modalHand.style.display = "none"
    modalPeacoat.style.display = "none"
  }

  // When hand is clicked, the footer's display is set to none and the modal-hand's display is set to block
  hand.onclick = () => {
    footer.style.display = "none"
    modal.style.display = "block"
    modalGuitar.style.display = "none"
    modalHand.style.display = "block"
    modalPeacoat.style.display = "none"

  }

  // When peacoat is clicked, the footer's display is set to none and the modal-peacoat's display is set to block
  peacoat.onclick = () => {
    footer.style.display = "none"
    modal.style.display = "block"
    modalGuitar.style.display = "none"
    modalHand.style.display = "none"
    modalPeacoat.style.display = "block"
  }

  // When close span is clicked, the footer's display is set to block and the modal-peacoat's is set to none
    modal.onclick = () => {
      footer.style.display = "block"
      modalGuitar.style.display = "none"
      modalPeacoat.style.display = "none"
      modal.style.display = "none"
    }
})()


// !(() => {
//
//   const           footer = document.getElementById('footer')
//   const             hand = document.getElementById('hand')
//   const            modal = document.getElementById('modal')
//   const        modalHand = document.getElementById('modal-hand')
//   const     modalPeacoat = document.getElementById('modal-peacoat')
//   const          peacoat = document.getElementById('peacoat')
//   const       modalClose = document.getElementsByClassName('modal-close')[0]
//
//   // When hand is clicked, the footer's display is set to none and the modal-peacoat's display is set to block
//   hand.onclick = () => {
//     footer.style.display = "none"
//     modalHand.style.display = "block"
//   }
//
//   // When peacoat is clicked, the footer's display is set to none and the modal-peacoat's display is set to block
//   peacoat.onclick = () => {
//     footer.style.display = "none"
//     modalPeacoat.style.display = "block"
//   }
//

//
//   // When the window is clicked, the footer's display is set to block and the modal-peacoat's is set to none
//   window.onclick = (event) => {
//     if (event.target === modal) {
//       footer.style.display = "block"
//       modalHand.style.display = "none"
//       modalPeacoat.style.display = "none"
//     }
//   }
// })()
