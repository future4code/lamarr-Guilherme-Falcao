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
retornaNumerosPares()

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
retornaMaiorNumero()

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objetos = {
    maiorNumero : Math.max(num1, num2),
    maiorDivisivelPorMenor : Math.max(num1, num2)%Math.min(num1, num2)===0,
    diferenca : (Math.max(num1, num2)-Math.min(num1, num2))}
    return objetos
}
retornaObjetoEntreDoisNumeros()

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}