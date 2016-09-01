!(() => {

  const      people = document.getElementById('people')
  const      nature = document.getElementById('nature')
  const   navPeople = document.getElementById('nav-people')
  const   navNature = document.getElementById('nav-nature')

  people.className = "visible"
  nature.className = "hidden"
  navPeople.style.textDecoration = "underline"
  navNature.style.textDecoration = "none"

  // When nav-people is clicked, hide nature and give nav-people the class of underlined
  navPeople.onclick = () => {
    nature.className = "hidden"
    navNature.style.textDecoration = "none"
    navPeople.style.textDecoration = "underline"
    people.className = "visible"
  }

  // When nav-nature is clicked, hide people and give nav-nature the class of underlined
  navNature.onclick = () => {
    nature.className = "visible"
    navNature.style.textDecoration = "underline"
    navPeople.style.textDecoration = "none"
    people.className = "hidden"
  }
})()
