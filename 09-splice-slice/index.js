let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva' ]

// let frutasExtraidas = frutas.slice(1,3) .//*OBS ele não inclui a posiçao 3

// console.log(frutasExtraidas)

// console.log(frutas)

// let frutasExtraidas = frutas.splice(1,2)
// console.log(frutasExtraidas)

let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pera')
console.log(frutas)