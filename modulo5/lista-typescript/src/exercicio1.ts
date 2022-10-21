const fraseNascimento = () => {
    let nome:string = process.argv[2]
    let date:string = process.argv[3]
    let splitted:string[] = date.split("/")

 return `Olá, me chamo ${nome}, nasci no dia ${splitted[0]} do mês ${splitted[1]} do ano de ${splitted[2]}.`
}
console.log(fraseNascimento());
