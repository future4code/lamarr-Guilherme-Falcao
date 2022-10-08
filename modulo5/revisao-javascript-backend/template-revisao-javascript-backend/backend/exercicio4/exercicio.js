console.log("Revisão de Javascript - Pré Backend - exercicio 4");

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]
const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]
const arrayConcatenado = primeiraLista.concat(segundaLista);
const geraItensUnicos = new Map();

arrayConcatenado.forEach((alimentos) =>{
    if (!geraItensUnicos.has(alimentos.nome)){
        geraItensUnicos.set(alimentos.nome, alimentos);
    }
});
console.log([...geraItensUnicos.values()]);
