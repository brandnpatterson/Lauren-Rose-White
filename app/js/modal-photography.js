!(() => {

  const               catBlue = document.getElementById('cat-blue')
  const           catWhitePho = document.getElementById('cat-white-photo')
  const               catYawn = document.getElementById('cat-yawn')
  const                colors = document.getElementById('colors')
  const               dolphin = document.getElementById('dolphin')
  const                 drops = document.getElementById('drops')
  const                fields = document.getElementById('fields')
  const           flowersDark = document.getElementById('flowers-dark')
  const           flowerWhite = document.getElementById('flower-white')
  const          flowerYellow = document.getElementById('flower-yellow')
  const                footer = document.getElementById('footer')
  const                guitar = document.getElementById('guitar')
  const                  hand = document.getElementById('hand')
  const              lavendar = document.getElementById('lavendar')
  const      modalPhotography = document.getElementById('modal-photography')
  const          modalCatBlue = document.getElementById('modal-cat-blue')
  const            modalClose = document.getElementsByClassName('modal-close')[0]
  const           modalColors = document.getElementById('modal-colors')
  const      modalCatWhitePho = document.getElementById('modal-cat-white-photo')
  const          modalCatYawn = document.getElementById('modal-cat-yawn')
  const          modalDolphin = document.getElementById('modal-dolphin')
  const            modalDrops = document.getElementById('modal-drops')
  const           modalFields = document.getElementById('modal-fields')
  const      modalFlowersDark = document.getElementById('modal-flowers-dark')
  const      modalFlowerWhite = document.getElementById('modal-flower-white')
  const     modalFlowerYellow = document.getElementById('modal-flower-yellow')
  const           modalGuitar = document.getElementById('modal-guitar')
  const             modalHand = document.getElementById('modal-hand')
  const         modalLavender = document.getElementById('modal-lavender')
  const            modalPalms = document.getElementById('modal-palms')
  const          modalPeacoat = document.getElementById('modal-peacoat')
  const            modalWaves = document.getElementById('modal-waves')
  const                 palms = document.getElementById('palms')
  const               peacoat = document.getElementById('peacoat')

  catBlue.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalCatBlue.style.display = "block"
    modalClose.style.display = "block"
  }

  catWhitePho.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalCatWhitePho.style.display = "block"
    modalClose.style.display = "block"
  }

  catYawn.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalCatYawn.style.display = "block"
    modalClose.style.display = "block"

  }

  colors.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalColors.style.display = "block"

  }

  dolphin.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalDolphin.style.display = "block"

  }

  drops.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalDrops.style.display = "block"

  }

  fields.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalFields.style.display = "block"
  }

  flowersDark.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalFlowersDark.style.display = "block"
  }

  flowerWhite.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalFlowerWhite.style.display = "block"
  }

  flowerYellow.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalFlowerYellow.style.display = "block"
  }

  guitar.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalGuitar.style.display = "block"
  }

  hand.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalHand.style.display = "block"
  }

  lavender.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalLavender.style.display = "block"
  }

  modalClose.onclick = () => {
    footer.style.display = "block"
    modalPhotography.style.display = "none"
    modalCatBlue.style.display = "none"
    modalCatWhitePho.style.display = "none"
    modalCatYawn.style.display = "none"
    modalColors.style.display = "none"
    modalDolphin.style.display = "none"
    modalDrops.style.display = "none"
    modalFields.style.display = "none"
    modalFlowersDark.style.display = "none"
    modalFlowerWhite.style.display = "none"
    modalFlowerYellow.style.display = "none"
    modalGuitar.style.display = "none"
    modalHand.style.display = "none"
    modalLavender.style.display = "none"
    modalPalms.style.display = "none"
    modalPeacoat.style.display = "none"
    modalWaves.style.display = "none"
  }

  palms.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalPalms.style.display = "block"
  }

  peacoat.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalPeacoat.style.display = "block"
  }

  waves.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClose.style.display = "block"
    modalWaves.style.display = "block"
  }

  window.onclick = (event) => {
    if (event.target === modalPhotography) {
      footer.style.display = "block"
      modalPhotography.style.display = "none"
      modalCatBlue.style.display = "none"
      modalCatWhitePho.style.display = "none"
      modalCatYawn.style.display = "none"
      modalColors.style.display = "none"
      modalDolphin.style.display = "none"
      modalDrops.style.display = "none"
      modalFields.style.display = "none"
      modalFlowersDark.style.display = "none"
      modalFlowerWhite.style.display = "none"
      modalFlowerYellow.style.display = "none"
      modalGuitar.style.display = "none"
      modalHand.style.display = "none"
      modalLavender.style.display = "none"
      modalPalms.style.display = "none"
      modalPeacoat.style.display = "none"
      modalWaves.style.display = "none"
    }
  }
})()
