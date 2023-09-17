function soltou (event) {
   console.log(event.shiftKey)
}


const input = document.querySelector('input')
input.addEventListener('keyup', soltou)



