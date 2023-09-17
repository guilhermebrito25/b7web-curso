/*
let personagens = {
    nome: 'guilherme',
    idade: 22,
    nacionalidade: 'Brazil',
    tamanho: ['alto', 'baixo'],
    atributos: {
        forca: 20,
        agilidade: 10,
        stamina: 2
    }
};

personagens.nome = 'Brito';
personagens.atributos.forca = 15;
personagens.tamanho.push('medio')

console.log(personagens);
*/

let personagem = {
    nome: 'guilherme',
    idade: 22,
    carros: [
        { modelo: 'fiat', cor: 'preto' },
        { modelo: 'volvo', cor: 'vermelho' }
    ]
}

console.log(personagem.carros[0].cor)