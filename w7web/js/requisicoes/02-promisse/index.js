// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts


function clicou() {
   fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
      return data.json();
   }).then((data) => {
      console.log(data[0].title)
   }).catch(() => {
      console.log('não foi possivel')
   })
}

document.querySelector('.button').addEventListener('click', clicou)



