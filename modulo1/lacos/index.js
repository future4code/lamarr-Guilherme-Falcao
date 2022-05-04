//  Exercícios de interpretação de código


/*  1. o codigo fez um laço no for somando o valor de i +1, e esse resultado soma a variavel valor, na linha de baixo;
       resultado impresso= 10.       */
       
/*  2. será impresso: 19, 21, 23, 25, 27, 30, todos os numeros maiores que 18;
       for (let numero of lista)
       console.log(lista.indexOf(numero > 18))       */

/*  3. *
       **
       ***
       ****       */

// --------------- • --------------------//


//  Exercícios de escrita de código 



//  Exercicio 1

/*
let petsUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))
    let arrayPets = []

    if (petsUsuario===0) {
        console.log("Que pena! Você pode adotar um pet!")
    
    } else if (petsUsuario > 0){
        for(let i = 1; i < petsUsuario + 1; i++) {
            arrayPets.push(prompt(`Qual é o nome dos seu pet ${i}?`))
        }
    }
        console.log(arrayPets)       */



// Exercicio 2


/*    const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]     */

// a)
/*    for (let i = 0; i < array.length; i++){
        const valoresArray = array[i]
        console.log(valoresArray)       
    }     */



// b)
/*    function imprimirDividindoPorDez (array){
        for (let i = 0; i < array.length; i++){
        console.log(array[i] / 10)
    }
}
        imprimirDividindoPorDez(array)  */



// c)     
/*   function imprimirPares (array){
        let arrayPares = []

        for(let i = 0; i < array.length; i++){

            if (array[i] % 2 === 0){
                arrayPares.push(array[i])
            }
        }
        console.log(arrayPares)
    }
    imprimirPares(array)   */



// d)
/*    let string = []
    for (let i = 0; i < array.length; i++){
        let elementoIndex = `O elemento index ${i} é ${array[i]}`
        console.log(elementoIndex)
    }        */



// e)