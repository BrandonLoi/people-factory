const personForm = document.querySelector('form#personForm')
const size = document.querySelector('form#size')


function HandleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.age.value
  const details = document.querySelector('#details')
  //document.querySelector('h1').textContent = name + ' ' + age
  document.getElementById('blank').textContent += name + '-' + age + ' \n'
  details.innerHTML = `<em>${name}</em>`;
}

function fontSize(ev) {
  ev.preventDefault()
  document.getElementById('sizeChange').style.fontSize = "20px"

}


personForm.addEventListener('submit', HandleSubmit)
size.addEventListener('submit', fontSize)
