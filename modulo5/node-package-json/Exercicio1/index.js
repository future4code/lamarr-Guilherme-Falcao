// Exercicio 1.
// a. Para acessar os parâmetros passados na linha de comando para o Node, usamos o "process.argv"

// b.
const nome = process.argv[2];
const idade = Number(process.argv[3]);
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// c.
console.log(
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`
);