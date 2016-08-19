!(() => {

  const people = document.getElementById('people')
  const nature = document.getElementById('nature')

  const navPeople = document.getElementById('nav-people')
  const navNature = document.getElementById('nav-nature')

  navPeople.onclick = () => {
    nature.setAttribute('class', 'hidden')
    people.setAttribute('class', 'visible')
    navPeople.setAttribute('class', 'underline')
    navNature.setAttribute('class', 'not-underlined')
  }

  navNature.onclick = () => {
      people.setAttribute('class', 'hidden')
      nature.setAttribute('class', 'visible')
      navNature.setAttribute('class', 'underline')
      navPeople.setAttribute('class', 'not-underlined')
  }
})()
