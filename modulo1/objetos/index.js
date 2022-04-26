// Exercícios de interpretação de código

/* 1. a) será impresso:
       Matheus Nachtergaele
       Virginia Cavendish
       canal: "Globo", horario: "14h"   */


/* 2. a) será impresso:
       cachorro - Juca
       gato - Juba
       tartaruga - Jubo   
       
      b) com os tres pontos conseguimos fazer um copia sem alterar o objeto copiado, e alterar e adicionar propriedades*/


/* 3. a) será impresso:
       false
       undefined

      b) ele imprimiu "undefined" pois nao foi definido antes na escrita do objeto no codigo.   */

//------------•-------------//

  // Exercícios de escrita de código
  
  // 1. a) 

/*
  const pessoa = {
    nome: "Guilherme",
    apelidos: ["Brazão", "Gui", "Golero"]
  }

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`) 

  // 1. b)

  const pessoaComOutrosApelidos = {...pessoa, apelidos: ["Brazonidas", "Barba", "Muhammad"]
  }

console.log(`Eu sou ${pessoaComOutrosApelidos.nome}, mas pode me chamar de: ${pessoaComOutrosApelidos.apelidos}`) 
*/


  // 2. a)
/*
  const pessoas = {
    nome: "Angela",
    idade: 55,
    profissao: "Empregada domestica"
  }
console.log([pessoas.nome, pessoas.nome.length, pessoas.idade, pessoas.profissao, pessoas.profissao.length]); */


  // 3.

  /*
  const carrinho = []

  const fruta1 = {
    nome: "morango",
    disponibilidade: true
}
  const fruta2 = {
    nome: "laranja",
    disponibilidade: true
}
  const fruta3 = {
    nome: "pitaya",
    disponibilidade: true
}

carrinho.push(fruta1, fruta2, fruta3)

console.log(carrinho); */

//------------•------------//

// D e s a f i o

// 1
/*
const nomeUsuario = prompt('Qual seu nome?')
const idadeUsuario = prompt('Qual sua idade?')
const profissãoUsuario = prompt('Qual sua profissão?')

const usuario = {
    nome: nomeUsuario,
    idade: idadeUsuario,
    profissao: profissãoUsuario
}

console.log(usuario);
console.log(typeof usuario);*/


// 2

/*
const filme1 = {
    nome: "Intocaveis",
    anoDeLancamento: 2011
}

const filme2 = {
    nome: "Escolha ou morra",
    anoDeLancamento: 2022
}

const lancadoAntes = filme1.anoDeLancamento <= filme2.anoDeLancamento
const lancadoMesmoAno = filme1.anoDeLancamento ===filme2.anoDeLancamento

console.log("O primeiro filme foi lançado antes do segundo?", lancadoAntes);
console.log("O primeiro filme foi lançado no mesmo ano do segundo?", lancadoMesmoAno);*/

// 3 - Não entendi, eu acho.

/*
const carrinho = []

const fruta1 = {
  nome: "morango",
  disponibilidade: true
}
const fruta2 = {
  nome: "laranja",
  disponibilidade: true
}
const fruta3 = {
  nome: "pitaya",
  disponibilidade: true
}

fruta1.disponibilidade = false
fruta2.disponibilidade = false
fruta3.disponibilidade = false


carrinho.push(fruta1, fruta2, fruta3)

console.log(carrinho); */