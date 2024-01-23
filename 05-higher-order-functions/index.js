// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 1
//     let anoDeNascimento = 2024 - idade
//     if (mesDeNascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log(`Seu ano de nascimento é: ${anoDeNascimento} `)
// }
// calcularAnoDeNascimento(19, 8, imprimirAnoDeNascimento)

function multiplicar (multiplicador){
    return function (numero){
        return numero * multiplicador
    }

}
let dobrar = multiplicar (2)
let triplicar = multiplicar (3)
let quadruplicar = multiplicar (4)

console.log(dobrar(5))
console.log(triplicar(5))
console.log(quadruplicar(5))

