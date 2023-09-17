let pessoa = {
    nome: 'guilherme',
    sobrenome: 'brito',
    idade: 22,

    nomeCompleto: function(){
        return this.nome + ' ' + this.sobrenome; //arrow functions não tem acesso ao "THIS"
    }
}

console.log(pessoa.nomeCompleto());
