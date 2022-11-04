// Exercicio 2
type Estatisticas = {
        numeros: number;
        a: number;
        b: number;
      };

function obterEstatisticas(numeros:number[]) {
    
    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior:number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.table(obterEstatisticas([3,5,1]))
// a) as entradas são os "numero" ; e a saída é o return estatisticas.