!(() => {

  const      people = document.getElementById('people')
  const      nature = document.getElementById('nature')
  const   navPeople = document.getElementById('nav-people')
  const   navNature = document.getElementById('nav-nature')

  // When nav-people is clicked, hide nature and give nav-people the class of underlined
  navPeople.onclick = () => {
    nature.setAttribute('class', 'hidden')
    navPeople.setAttribute('class', 'underline')
    navNature.setAttribute('class', 'not-underlined')
    people.setAttribute('class', 'visible')
  }

  // When nav-nature is clicked, hide people and give nav-nature the class of underlined
  navNature.onclick = () => {
      nature.setAttribute('class', 'visible')
      navNature.setAttribute('class', 'underline')
      navPeople.setAttribute('class', 'not-underlined')
      people.setAttribute('class', 'hidden')
  }
})()
