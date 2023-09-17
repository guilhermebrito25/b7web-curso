function saberPreco(metragem, quartos){
    let valorDoMetro = 3000
    if(quartos == 1){
        return metragem * valorDoMetro
    } else if(quartos == 2){
        return (valorDoMetro * 1.2) * metragem
    } else if(quartos == 3){
        return (valorDoMetro * 1.5) * metragem
    }
}

let valorReal1 = saberPreco(1, 3)
console.log(valorReal1)
console.log('FIM FIM FIM FIM FIM FIM FIM FIM')