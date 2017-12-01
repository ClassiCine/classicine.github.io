class Filme {
	constructor(nome, ano, diretor) {
		this.nome = nome;
		this.ano = ano;
		this.diretor = diretor;
		//this.imagem = imagem;
	}
	
	get getNome() {
		return this.nome;
	}
	
	get getAno() {
		return this.ano;
	}
	
	get getDiretor() {
		return this.diretor;
	}
	
	//get getImagem() {
		//return this.imagem;
	//}
	
	get toString() {
		var content = '';
		
		content += 'Filme: ' + this.name;
		content += ' - Ano: ' + this.ano;
		content += ' - Diretor: ' + this.diretor;
		//content += ' - Imagem: ' + this.imagem;
		content += '<br/>';
		
		return content;
	}
	
}