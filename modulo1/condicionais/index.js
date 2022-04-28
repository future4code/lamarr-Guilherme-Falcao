// Exercícios de interpretação de código


/*  1. a) esse codigo pega um numero inserido pelo 
          usuario via prompt e faz um if/else para saber se 
          passa ou nao no teste, nesse caso o teste é, se o 
          numero inserido é divisivel por 2 ou não;

        b) ele imprime que passou no teste todos
        numeros divisiveis por 2 que resulta no
        resto da divisão em "0"; 

        c) ele imprime que nao passou no teste os numeros
        cujo resto da divisão por 2 resulta em algum valor
        que não seja "0"   */



/*  2. a) o codigo serve para dar um valor as frutas do 
          supermercado, para quando o usuario inserir o nome
          da fruta pelo prompt é impresso o nome da fruta
          mais o valor(preço);
          
        b) "O preço da fruta Maçã é R$ 5";

        c) "O preço da fruta Pêra é R$ 5"   */


/*  3. a) A primeira linha está pedindo para o usuario 
          inserir um numero e ja convertendo ele 
          de string pra number;
       
       b) numero 10 imprime: "Esse número passou no teste"
          numero -10 ficou em branco
       
       c) está imprimindo o erro "mensagem is not defined"
       o console log estando fora do objeto não imprime a mensagem
       o correto seria estar dentro das "{}" dessa maneira:   */

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem ="Essa mensagem é secreta!!!"

    console.log(mensagem)
}   */

//-------------------•-------------------//

// Exercícios de escrita de código


// Exercicio 1

/*   const idadeUsuario = Number(prompt("Qual a sua idade?"))

const condicao = idadeUsuario >= 18

if (condicao){
    console.log(`Você pode dirigir!`)
}else{
    console.log(`Você não pode dirigir!`)
}     */


// Exercicio 2

/*   const turnoEstudos = prompt("Qual turno você estuda? M (matutino), V (vespertino), N (noturno)")

const condicao1 = turnoEstudos === "M"
const condicao2 = turnoEstudos === "V"

if (condicao1){
    console.log("Bom dia!")
}else if (condicao2) {
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}       */


// Exercicio 3

/*
const turnoEstudos = prompt("Qual turno você estuda? M (matutino), V (vespertino), N (noturno)")

switch (turnoEstudos){
    case 'M':
        console.log('Bom dia!')
break
    case 'V':
        console.log('Boa tarde!')
break
    case 'N':
        console.log('Boa noite!')
}      */


// Exercicio 4

/*
const generoFilme = prompt("Vamos ver o filme do genero:")
const cinemaValor = prompt("O ingresso ta custando:")

const condicao1 = generoFilme === "fantasia"
const condicao2 = cinemaValor <= 15

if (condicao1 && condicao2){
    console.log("Bom filme!")
}
else{ (!condicao1 && !condicao2)
    console.log("Escolha outro filme :(")
}      */