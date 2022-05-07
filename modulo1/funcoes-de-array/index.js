// Exercícios de interpretação de código


//   1. a) vai ser impresso o item, a posição dele no array, depois o array inteiro;

//   2. a) Ele vai retornar os nomes dos usuarios;

//   3. a) Ele vai imprimir os indices 0 e 1, que sao diferentes de "Chijo".




// Exercícios de escrita de código

/*    // I N I C I O   C O M E N T A R I O   C O D I G O
//   1. 

// Item A
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomesDoguinhos = pets.map((item) => {
     return item.nome
 })
 console.log(nomesDoguinhos)


 // Item B
    const soSalsichas = pets.filter((salsichas) => {
        return salsichas.raca === "Salsicha"
})

    console.log(soSalsichas)


// Item C
    const poodles = pets.filter((racaPoodle) => {
        return racaPoodle.raca === "Poodle"
})
    const nomePoodles = poodles.map((nomes) => {
        return nomes.nome 
    })

    const arrayPudous = nomePoodles

    for (let i=0; i<arrayPudous.length; i++){
        if (arrayPudous >= 0){
        }
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${arrayPudous[i]}!`)
    }         */ // F I N A L   C O M E N T A R I O






    // Exercicio 2


    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

// a)
const nomeDoProduto = produtos.map((item) => {
    return item.nome
})
console.log(nomeDoProduto)

//b)
    const precoDesconto = produtos.map((item) => {
        return [item.nome, (item.preco*=0.95).toFixed(2)]
    })
        console.log(precoDesconto)

// c)
const somenteBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
    console.log(somenteBebidas)

// d)
const somenteYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
    console.log(somenteYpe)

// e)
    const arrayFrase = somenteYpe.map((item) => {
        return `Compre ${item.nome}, por ${item.preco}`
    })
    console.log(arrayFrase);




// Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//   1. a)
    const nomesSeparados = pokemons.map((item) => {
        return item.nome
    })

    console.log(nomesSeparados.sort());