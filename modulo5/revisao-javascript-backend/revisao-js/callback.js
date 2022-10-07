const imprimeTexto = (texto) => {
    console.log(texto)
}

const matriculaPessoa = (pessoa, callback) => {
    if (pessoa.idade >= 18) {
        callback("Matrícula realizada.")
    } else {
        callback("Idade insuficiente. Precisa ser maior de idade.")
    }
}

const fulano = {
    idade: 17
}

const ciclana = {
    idade: 20
}

matriculaPessoa(fulano, imprimeTexto)
matriculaPessoa(ciclana, imprimeTexto)

const beltrano = {
    idade: 15
}

matriculaPessoa(beltrano, (texto) => {
    console.log(texto)
})