const personForm = document.querySelector('form#personForm')
const size = document.querySelector('form#size')

function HandleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')

  const person = {
    name: f.personName.value,
    color: renderColor(f.favoriteColor.value).outerHTML,
    age: f.age.value,
  }

  details.appendChild(renderList(person))
}

function fontSize(ev) {
  ev.preventDefault()
  document.getElementById('sizeChange').style.fontSize = "20px"
}

function renderListItem(fieldName, value) {
  const li = document.createElement('li')
  li.innerHTML = `${fieldName}: ${value}`
  return li
}
function renderList(personData) {
  const ul = document.createElement('ul')
  //[name, favcolor, age]
  Object.keys(personData).map(function(fieldName) {
    const li = renderListItem(fieldName, personData[fieldName])
    ul.appendChild(li)
  })
  return ul
}

function renderColor(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '100px'
  colorDiv.style.height = '50px'
  return colorDiv
}


personForm.addEventListener('submit', HandleSubmit)
size.addEventListener('submit', fontSize)
