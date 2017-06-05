const personForm = document.querySelector('form#personForm')

function HandleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.age.value
    document.querySelector('h1').textContent = name + ' ' + age;
}

personForm.addEventListener('submit', HandleSubmit)
