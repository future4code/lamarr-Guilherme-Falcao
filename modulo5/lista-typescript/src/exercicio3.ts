type Filme = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
const filmes = () => {
    const filme: Filme ={
    nome: "Um Sonho Possível",
    anoLancamento: 2009,
    genero: GENERO.DRAMA,
    pontuacao: 7.6
    }
    return filme
};
console.table(filmes())