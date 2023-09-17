function validacaoLogin(user, senha){
    if (user == 'guilherme' && senha == 25052001){
        return true
    } else {
        return false
    }
}

let user = 'guilherme'
let senha = 25052001
let resultadoValidacao = validacaoLogin(user, senha)
console.log(resultadoValidacao ?'Você está logado na rede' :'Você não tem acesso permitido')

