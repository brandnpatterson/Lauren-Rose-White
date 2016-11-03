!(() => {

  const
    catBlue          = document.getElementById("cat-blue"),
    catWhitePho       = document.getElementById("cat-white-photo"),
    catYawn           = document.getElementById("cat-yawn"),
    colors            = document.getElementById("colors"),
    dolphin           = document.getElementById("dolphin"),
    drops             = document.getElementById("drops"),
    fields            = document.getElementById("fields"),
    flowersDark       = document.getElementById("flowers-dark"),
    flowerWhite       = document.getElementById("flower-white"),
    flowerYellow      = document.getElementById("flower-yellow"),
    footer            = document.getElementById("footer"),
    guitar            = document.getElementById("guitar"),
    hand              = document.getElementById("hand"),
    lavender          = document.getElementById("lavender"),
    modalPhotography  = document.getElementById("modal-photography"),
    modalCatBlue      = document.getElementById("modal-cat-blue"),
    modalClosePhoto   = document.getElementById("modal-close-photo"),
    modalColors       = document.getElementById("modal-colors"),
    modalCatWhitePho  = document.getElementById("modal-cat-white-photo"),
    modalCatYawn      = document.getElementById("modal-cat-yawn"),
    modalDolphin      = document.getElementById("modal-dolphin"),
    modalDrops        = document.getElementById("modal-drops"),
    modalFields       = document.getElementById("modal-fields"),
    modalFlowersDark  = document.getElementById("modal-flowers-dark"),
    modalFlowerWhite  = document.getElementById("modal-flower-white"),
    modalFlowerYellow = document.getElementById("modal-flower-yellow"),
    modalGuitar       = document.getElementById("modal-guitar"),
    modalHand         = document.getElementById("modal-hand"),
    modalLavender     = document.getElementById("modal-lavender"),
    modalPalms        = document.getElementById("modal-palms"),
    modalPeacoat      = document.getElementById("modal-peacoat"),
    modalWaves        = document.getElementById("modal-waves"),
    palms             = document.getElementById("palms"),
    peacoat           = document.getElementById("peacoat"),
    waves             = document.getElementById("waves")

  // Display only the modal that is selected
  catBlue.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalCatBlue.style.display = "block"
    modalClosePhoto.style.display = "block"
  }

  catWhitePho.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalCatWhitePho.style.display = "block"
    modalClosePhoto.style.display = "block"
  }

  catYawn.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalCatYawn.style.display = "block"
    modalClosePhoto.style.display = "block"

  }

  colors.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalColors.style.display = "block"

  }

  dolphin.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalDolphin.style.display = "block"

  }

  drops.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalDrops.style.display = "block"

  }

  fields.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalFields.style.display = "block"
  }

  flowersDark.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalFlowersDark.style.display = "block"
  }

  flowerWhite.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalFlowerWhite.style.display = "block"
  }

  flowerYellow.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalFlowerYellow.style.display = "block"
  }

  guitar.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalGuitar.style.display = "block"
  }

  hand.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalHand.style.display = "block"
  }

  lavender.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalLavender.style.display = "block"
  }

  modalClosePhoto.onclick = () => {
    footer.style.display = "block"
    modalPhotography.style.display = "none"
    modalCatBlue.style.display = "none"
    modalCatWhitePho.style.display = "none"
    modalCatYawn.style.display = "none"
    modalClosePhoto.style.display = "none"
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
    modalClosePhoto.style.display = "block"
    modalPalms.style.display = "block"
  }

  peacoat.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalPeacoat.style.display = "block"
  }

  waves.onclick = () => {
    footer.style.display = "none"
    modalPhotography.style.display = "block"
    modalClosePhoto.style.display = "block"
    modalWaves.style.display = "block"
  }

  modalPhotography.onclick = () => {
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
})()
