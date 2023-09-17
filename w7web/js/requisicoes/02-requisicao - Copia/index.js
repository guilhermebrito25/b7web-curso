// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts


function clicou() {
   fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
      return data.json();
   }).then((data) => {
      console.log(data[0].title)
   })
}

document.querySelector('.button').addEventListener('click', clicou)



