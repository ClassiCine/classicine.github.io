window.onload = init;

let tableFilme;
let imagemFilme;

function init() {
	var conexao = escolheConexao();
	var firebase = new Firebase(conexao);
	var database = firebase.ref().child('filmes');
	createView(database);
}

function escolheConexao() {
	var aleatorio = Math.floor((Math.random() * 3) + 1);
	let cineclassico = 'https://cineclassico-4d826.firebaseio.com';
	let classicine = 'https://classicine-1c6e2.firebaseio.com';
	
	switch(aleatorio) {
		case 1:
			return cineclassico;
		case 2:
			return classicine;
		case 3:
			return cineclassico;
		case 4:
			return classicine;
		case 5:
			return cineclassico;
		case 6:
			return classicine;
	}
}

function createView(database) {
	tableFilme = document.getElementById("filme");
	imagemFilme = document.getElementById("imagem");
	
	createTableHead();
	
	database.on('value', (snap) => {
		snap.forEach(function(data){
			let val = data.val();
			var filme = new Filme(val.nome, val.ano, val.diretor, val.imagem);
			
			//Adicionando imagem ao HTML via DOM
			//imagemFilme.src = val.imagem;
			
			createTableBody(filme);
		});
	});
}

function createTableHead() {
	var linhaCabecalho = tableFilme.insertRow(0);
	var cabecalho0 = linhaCabecalho.insertCell(0);
	var cabecalho1 = linhaCabecalho.insertCell(1);	
	var cabecalho2 = linhaCabecalho.insertCell(2);
			
	cabecalho0.innerHTML = "Nome";
	cabecalho1.innerHTML = "Ano";
	cabecalho2.innerHTML = "Diretor";
}

function createTableBody(filme) {	
	var linha = tableFilme.insertRow(1);
	var coluna0 = linha.insertCell(0);
	var coluna1 = linha.insertCell(1);	
	var coluna2 = linha.insertCell(2);
	
	coluna0.innerHTML = filme.getNome;
	coluna1.innerHTML = filme.getAno;
	coluna2.innerHTML = filme.getDiretor;
}