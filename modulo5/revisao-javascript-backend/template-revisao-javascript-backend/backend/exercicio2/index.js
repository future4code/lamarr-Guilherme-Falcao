console.log("exercício 2");

let clients =[
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
];

newClients = {id: 4, nome: "Gui"};

if (clients.id === newClients.id) (console.log(`Erro. Parâmetro inválido, o "id" já existe`));
 else if(clients.push(newClients))
console.log(clients);




let valorTabuada = 7

    if (valorTabuada === String(valorTabuada)) console.log(`Erro. Parâmetro inválido (deve ser digitado um número)`)
    else if (valorTabuada > 10) console.log(`Erro. Parâmetro inválido (número precisa valer entre 1 e 10)`);
    else {for (let y = 1; y < 11; y++) {
        console.log(`${valorTabuada} x ${y} = ${valorTabuada * y}`);
    }};
