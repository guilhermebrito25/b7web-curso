// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts

//GET - pegar informação
//POST - enviar informação
//PUT - alterar informação existente
//DELETE - deletar informação

function clicou() {
   fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
      return data.json();
   }).then((data) => {
      console.log(data[0].title)
   }).catch((error) => {
      console.log('não foi possivel')
      console.log(error)
   }).finally(() => {
      console.log('opa acabou tudo')
   })
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