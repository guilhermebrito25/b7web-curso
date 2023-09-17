function adicionador(event) {
    if(event.code == 'Enter') {
        let creatLi = document.createElement('li')
        creatLi.innerText = input.value
        ul.append(creatLi)
    }
}

const input = document.querySelector('input')
const ul = document.querySelector('ul')
input.addEventListener('keyup', adicionador)