let frutas = ['maça', 'uva', 'laranja', 'banana'];

let bigFrutas = frutas.filter((item) => {  //filtra apenas quais iten eu quero de uma lista
    return item.length > 4;
});
console.log(bigFrutas)

let frutasOk = frutas.every((value) => {  //retorna true ou false se todos os itens forem 'ok'. baseado nos parametros que forem passados
    if(value.length > 3) {
        return true
    } else {
        return false
    }
})
console.log(frutasOk)

let frutasOk2 = frutas.some((value) => {  //retorna true ou false se pelo menos um atender ao que eu preciso baseado nos parametros passados
    if(value.length > 3) {
        return true
    } else {
        return false
    }
})
console.log(frutasOk2)


if(frutas.includes('uva')) {
    console.log('tem uva')
} else {
    console.log('Não tem uva')
}
