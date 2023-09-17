// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts

//GET - pegar informação
//POST - enviar informação
//PUT - alterar informação existente
//DELETE - deletar informação

async function clicou() {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
   let json = await response.json();
   console.log(json)
}

function inserir() {
   fetch('https://jsonplaceholder.typicode.com/posts', 
   {method: 'POST', headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
      title: 'titulo de teste',
      body: 'corpo de teste',
      userId: 2
   })
}).then((response) => {
   return response.json();
}).then((JSON) => {
   console.log(JSON)
})
}

document.querySelector('.button').addEventListener('click', clicou)
document.querySelector('#button2').addEventListener('click', inserir)