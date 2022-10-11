const user = {
    fullName: "Astrodev Labenu",
    "full name": "Astrodev Labenu",
    age: 30
}

console.log(user["full name"])

const imprimeValorProp = (objeto, propriedade) => {
    console.log(objeto[propriedade])
}

imprimeValorProp(user, "fullName")
imprimeValorProp(user, "full name")
imprimeValorProp(user, "age")