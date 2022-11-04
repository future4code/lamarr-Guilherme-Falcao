// a): 
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) escrevendo a linha "exercicio-4": "tsc && node ./build/exercicio-4.js" no package.json
// c) teria diferença na hora de escrever o caminho a ser lido para transpilar. Exemplo: "tsc && node ./src/exercicio-4.js"
// d) podemos transpilar varios arquivos da mesma pasta, colocando os nomes separados por espaço.