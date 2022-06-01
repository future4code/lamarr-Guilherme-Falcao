```let quantidade = arrayDeNumeros.filter(valor => valor == numeroEscolhido).length;
	if(quantidade == 0){
		return 'Número não encontrado';
	}else{
		return `O número ${numeroEscolhido} aparece ${quantidade}x`;
	}
}```