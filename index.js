const PeopleFactory = {
  theForm: document.querySelector('form#personForm'),
  size: document.querySelector('form#size'),

  init: function(formSelector) {
    const theForm = document.querySelector(formSelector)
    this.theForm.addEventListener('submit', this.HandleSubmit.bind(this))
    size.addEventListener('submit', this.fontSize)
  },

  HandleSubmit: function(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')

    const person = {
      name: f.personName.value,
      color: this.renderColor(f.favoriteColor.value).outerHTML,
      age: f.age.value,
    }
    details.appendChild(this.renderList(person))
  },

  fontSize: function(ev) {
    ev.preventDefault()
    document.getElementById('sizeChange').style.fontSize = "20px"
  },

  renderListItem: function(fieldName, value) {
    const li = document.createElement('li')
    li.innerHTML = `${fieldName}: ${value}`
    return li
  },
  renderList: function(personData) {
    const ul = document.createElement('ul')
    //[name, favcolor, age]
    Object.keys(personData).map((fieldName) => {
      const li = this.renderListItem(fieldName, personData[fieldName])
      ul.appendChild(li)
    })
    return ul
  },

  renderColor: function(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '100px'
    colorDiv.style.height = '50px'
    return colorDiv
  },
}

PeopleFactory.init('form#personForm')
