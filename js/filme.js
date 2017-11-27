class Filme {
	constructor(nome, ano, diretor) {
		this.name = nome;
		this.ano = ano;
		this.diretor = diretor;
	}
	
	get toString() {
		var content = '';
		
		content += 'Filme: ' + this.name;
		content += ' - Ano: ' + this.ano;
		content += ' - Diretor: ' + this.diretor;
		content += '<br/>';
		
		return content;
	}
	
}