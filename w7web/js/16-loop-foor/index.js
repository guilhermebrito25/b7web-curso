let produtos = [
    {nomeCor: 'preto', quantidade: '2'},
    {nomeCor: 'vermelho', quantidade: '1'},
    {nomeCor: 'verde', quantidade: '5'},
    
];

for (let n = 0; n < produtos.length; n++) {
    console.log(`nome da cor: ${ produtos[n].nomeCor } e a quantidade dessas cores é ${ produtos[n].quantidade }`)
};

/*
for(let contador in produtos) {
    console.log(produtos[contador]);
}


for(let valor of produtos) {
    console.log(valor);
}
*/