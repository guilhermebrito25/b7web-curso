// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts


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

document.querySelector('.button').addEventListener('click', clicou)



