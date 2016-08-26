!(() => {

  const      people = document.getElementById('people')
  const      nature = document.getElementById('nature')
  const   navPeople = document.getElementById('nav-people')
  const   navNature = document.getElementById('nav-nature')

  people.style.display = "block"
  nature.style.display = "none"
  navPeople.style.textDecoration = "underline"
  navNature.style.textDecoration = "none"

  // When nav-people is clicked, hide nature and give nav-people the class of underlined
  navPeople.onclick = () => {
    nature.style.display = "none"
    navNature.style.textDecoration = "none"
    navPeople.style.textDecoration = "underline"
    people.style.display = "block"
  }

  // When nav-nature is clicked, hide people and give nav-nature the class of underlined
  navNature.onclick = () => {
      nature.style.display = "block"
      navNature.style.textDecoration = "underline"
      navPeople.style.textDecoration = "none"
      people.style.display = "none"
  }
})()
