window.onload = init;

let tableFilme;
let imagemFilme;

function init() {
	loadCarousel()
	
	var conexao = escolheConexao();
	var firebase = new Firebase(conexao);
	var database = firebase.ref().child('categoria');
	
	createView(database);
}

function loadCarousel() {
	$(document).ready(function(){
		$('.carousel').carousel({
			dist:0,
			shift:0,
			padding:20,
		});
	});
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
	
	//createTableHead();
	
	database.on('value', (snap) => {
		snap.forEach(function(data){
			let val = data.val();
			
			console.log(val.nome);
			testeFor(val.filmes);
			console.log('-----------------------------------------------');
		});
	});
}

function testeFor(item) {
	item.forEach(function(data){
		console.log("Nome: " + data.nome + " Ano: " + data.ano);
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
	
	//var capaFilme = document.createElement("IMG");
	//capaFilme.src = filme.getImagem;
	
	var btn = document.createElement("BUTTON");
	btn.className += " btn btn-primary";
	
	var textoButton = document.createTextNode("Assistir");
	btn.appendChild(textoButton);
	linha.appendChild(btn);
}