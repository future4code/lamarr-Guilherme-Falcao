// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length
    return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const retornaArrayInvertido = array.reverse()
        return retornaArrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) { 
    const ordenarArray = array.sort(function(a,b){
        return a-b
    })
    return ordenarArray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    function numerosPares(array){
        return array % 2 === 0
    }
    let pares = array.filter(numerosPares)
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const paresElevadosADois=[]
    for(let numero of array){
        if(array.length >=0){
            if(numero%2===0)
            paresElevadosADois.push(numero**2)
        }
    }
    return paresElevadosADois
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = 0
        for (let i=0; i<array.length; i++){
        let numeroInicial = array[i]
        if (numeroInicial > numeroMaior){
            numeroMaior = array[i]
        }}
        return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objetos = {
    "maiorNumero" : Math.max(num1, num2),
    "maiorDivisivelPorMenor" : Math.max(num1, num2)%Math.min(num1, num2)===0,
    "diferenca" : (Math.max(num1, num2)-Math.min(num1, num2))}
    return objetos
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo

    if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC ){triangulo = "Equilátero"} 
    else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !==ladoA){triangulo = "Escaleno"}
    else {triangulo = "Isósceles"}
        return triangulo
} 

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
        function compararNumeros(a, b) {
          return a - b;
        }
        array.sort(compararNumeros)
        
        let segundoMaior = array[array.length-2]
        let segundoMenor = array[1]
        
        return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join([`, `])}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonimizada = {...pessoa,
        nome: "ANÔNIMO"
    }
    return pessoaAnonimizada
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const arrayPessoasAutorizadas = []
        for (let pessoa of pessoas)
        if(
            pessoa.altura>=1.5 &&
            pessoa.idade>14 &&
            pessoa.idade<=60
        ){
            arrayPessoasAutorizadas.push(pessoa)
        }
        return arrayPessoasAutorizadas
    } 

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const arrayPessoasNaoAutorizadas = []
        for (let pessoa of pessoas)
        if(
            pessoa.altura<1.5 ||
            pessoa.idade<=14 ||
            pessoa.idade>60
        ){
            arrayPessoasNaoAutorizadas.push(pessoa)
        }
        return arrayPessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordemAlfabetica = consultas.sort(function(a,b){
        if (a.nome>b.nome){return 1}
        if (a.nome<b.nome){return -1}
    })
    return ordemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}