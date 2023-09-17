function saberPorcentagem(valor, porcentagem) {
    return (valor / 100) * porcentagem;
}

let valor = 40;
let porcentagem = 25;
let porcentagemReal = saberPorcentagem(valor, porcentagem);
console.log(`${porcentagem}% de ${valor} é ${porcentagemReal}`);
console.log('FIM FIM FIM FIM FIM FIM')