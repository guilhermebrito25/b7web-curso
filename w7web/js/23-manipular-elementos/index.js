function clicou() {
    const teste1 = document.querySelector('#teste1')
    const ul = teste1.querySelector('ul')

    let newUl = document.createElement('ul')

    for (let n = 0; n < 5; n++) {
        
        let newLi = document.createElement('li')
        newLi.innerHTML = 'item adicionado' + n
        newUl.append(newLi)
    }
    
    ul.after(newUl)
}