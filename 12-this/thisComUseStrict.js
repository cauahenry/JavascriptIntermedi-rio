'use strict'
//*THIS NO CONTEXTO FUNÇÃO
// console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'Caua'
// function saudar () {
//     console.log('this no contexto da funçao', this)
//     console.log('Olá,' + this.name)
// }
// saudar()

//* THIS NO CONTEXTO MÉTODO
// let usuario = {
//     nome: 'Caua',
//     saudar: function(){
//         console.log('this no contexto do método', this)

//         console.log('this no contexto do método', this.nome)
//     }
// }
// usuario.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
    cozinhar : function (temperaturaDeCozimento){
        console.log('this no contexto do objeto comida', this)
        this.temperatura = temperaturaDeCozimento;
}
}
console.log(comida)

comida.cozinhar(100)

console.log(comida)