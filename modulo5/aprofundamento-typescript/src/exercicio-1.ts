// Exercício 1
// a) const minhaString:string = 13
//  não está aceitando pois o tipo 'number' não pode ser atribuído ao tipo 'string'.

// b) const meuNumero:number | string = "lula"
// usar o Union Type para aceitar ambos, string e number; 

// d) 
enum FavColour {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul escuro",
    VIOLETA = "Violeta",
  }

// c)
type Person = {
    name: string;
    age: number;
    favouriteColour: string;
  };

const pessoa: Person = {
    name: "Gui",
    age: 25,
    favouriteColour: FavColour.AZUL
}
const pessoa2: Person = {
    name: "Léo",
    age: 27,
    favouriteColour: FavColour.VERDE
}
const pessoa3: Person = {
    name: "Vitim",
    age: 25,
    favouriteColour: FavColour.LARANJA
}
console.table(pessoa2)