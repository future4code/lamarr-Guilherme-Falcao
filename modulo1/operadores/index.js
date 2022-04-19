//Exercícios de interpretação de código

//Exercicio 1
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. false", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. false", resultado)

resultado = !resultado && (bool1 || bool2)
console.log("c. true", resultado)

console.log("d. boolean", typeof resultado)*/
//• Final do exercicio 1• 


//Exercicio 2
//O problema é que está impresso como string no código, pois não foi feito a conversao de string para numero 
//•Final do exercicio 2•


//Exercicio 3 - solucao
/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

const soma = primeiroNumero + segundoNumero

console.log(soma)*/
//•Final do exercicio 3•

//-----------------------------------------------------------

//Exercícios de escrita de código

//Exercicio 1
/*let idadeUsuario = prompt("Qual a sua idade?")
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")

let idadeMaiorOuMenor = idadeUsuario >= idadeMelhorAmigo

let diferencaIdades = idadeUsuario - idadeMelhorAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaiorOuMenor)
console.log("Diferença de idade", diferencaIdades)

console.log(typeof idadeMaiorOuMenor)
console.log(typeof diferencaIdades)*/
//•Final do exercicio 1•

//Exercicio 2
/*let numeroPar = prompt("Insira um número par!")

let restoDivisao = numeroPar % 2

console.log("Resto da divisão", restoDivisao)
//c. todo numero par dividido por 2 retorna o resto 0
//d. todo numero impar dividido por 2 retorna o resto 1
console.log(typeof restoDivisao)
//•Final do exercicio 2•*/


//Exercicio 3
/*let idadeDoUsuario = prompt("Qual a sua idade?")
let idadeEmMeses = idadeDoUsuario * 12
let idadeEmDias = idadeDoUsuario * 365
let idadeEmHoras = idadeEmDias * 24

idadeDoUsuario = Number(idadeDoUsuario)

console.log("Idade do usuario em anos:", idadeDoUsuario)
console.log("Idade do usuario em meses:", idadeEmMeses)
console.log("Idade do usuario em dias:", idadeEmDias)
console.log("Idade do usuario em horas:", idadeEmHoras)

console.log(typeof idadeDoUsuario)
console.log(typeof idadeEmDias)
console.log(typeof idadeEmHoras)
console.log(typeof idadeEmMeses)*/
//•Final do exercicio 3•


//Exercicio 4
/*let primeiroNumero = prompt("Digite um número!")
let segundoNumero = prompt("Agora digite outro número!")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

let numeroMaior = primeiroNumero > segundoNumero
let numeroIgual = primeiroNumero === segundoNumero
let primeiroDivisivel = primeiroNumero % segundoNumero === 0
let segundoDivisivel = segundoNumero % primeiroNumero === 0

console.log("Primeiro número:", primeiroNumero)
console.log("Segundo número:", segundoNumero)

console.log("O primeiro numero é maior que o segundo?:", numeroMaior)
console.log("O primeiro numero é igual ao segundo?:", numeroIgual)
console.log("O primeiro numero é divisível pelo segundo?", primeiroDivisivel)
console.log("O segundo numero é divisível pelo primeiro?", segundoDivisivel)*/
//•Final do exercicio 4• 