const personForm = document.querySelector('form#personForm')
const size = document.querySelector('form#size')


function HandleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const details = document.querySelector('#details')
  const favoriteColor = f.favoriteColor.value;
  const age = f.age.value
  const colorDiv = `
  <div style="background-color: ${favoriteColor}; width: 100px; height:50px; "></div>`
  //document.querySelector('h1').textContent = name + ' ' + age
  //document.getElementById('blank').textContent += name + '-' + age + ' \n'
  //details.innerHTML = `<em>${name}</em>`;
  // const em = document.createElement('em')
  // em.textContent = name;
  // details.appendChild(em
  // details.innerHTML = `
  //   <ul>
  //     <li>${name}</li>
  //     <li>${colorDiv}</li>
  //     <li>${age}</li>
  //   </ul>
  // `
  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  li1.textContent = `Name: ${name}`
  const li2 = document.createElement('li')
  li2.textContent = `Color: ${favoriteColor}`
  const li3 = document.createElement('li')
  li3.textContent = `Age: ${age}`

  details.appendChild(ul)
  details.appendChild(li1)
  details.appendChild(li2)
  details.appendChild(li3)
}

function fontSize(ev) {
  ev.preventDefault()
  document.getElementById('sizeChange').style.fontSize = "20px"

}


personForm.addEventListener('submit', HandleSubmit)
size.addEventListener('submit', fontSize)
