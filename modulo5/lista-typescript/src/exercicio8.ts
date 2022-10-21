const contaFatorial = (palavra: string): number => {
    let conta: number = palavra.length

    for (let i = 1; i < palavra.length; i++) {
        conta = conta * i
    }
return conta
}
console.log(contaFatorial("uno"))