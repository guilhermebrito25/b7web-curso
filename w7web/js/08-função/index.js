function gravidade() {
    console.log('gravidade do planeta é 9.8');
}
gravidade();
//
//
//
function somar(n1, n2) {
    console.log(`O resultado é ${n1+n2}`);
}
somar(10, 20);


function nomeador(nome, sobrenome) {
    console.log(`O nome completo é ${nome} ${sobrenome}`);
}
nomeador('guilherme', 'brito');
//
//
//
function nomeador2(nome, sobrenome) {
    return `O nome completo é ${nome} ${sobrenome}`;
}

let nomecompleto = nomeador2('gui', 'brito');
console.log(nomecompleto);
//
//
//
function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 18
let verificacao = maiorDeIdade(idade);

console.log(verificacao ?'maior de idade' :'menor de idade')
console.log ('FIM FIM FIM FIM FIM FIM FIM FIM FIM FIM')
