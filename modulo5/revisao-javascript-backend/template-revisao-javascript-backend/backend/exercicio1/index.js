console.log("Revisão de Javascript - Pré Backend - exercicio 1");

let validacao = (i) => {
    console.log(i);
}

function converter (i, number, valid) {
    if (i === "K"){ 
        valid (` ${number}º Celsius é equivalente a ${number + 273.15}º Kelvin`);
    } else if (i === "F"){ 
        valid (` ${number}º Celsius é equivalente a ${1.8 * number + 32}º Farenheit`);
    } else if (i !== "F" || i !== 'K') { 
        valid (`Erro. Parâmetro ${i} inválido`);
    }
}
converter("P", 22, validacao) 