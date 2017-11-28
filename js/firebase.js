window.onload = init;
//elemento = document.getElementById("filme");

function init() {
	var aleatorio = Math.floor((Math.random() * 3) + 1);
	//alert(aleatorio);
	
	var conexao = escolheConexao(aleatorio);

	var firebase = new Firebase(conexao);
	var database = firebase.ref().child('filmes');
	
	var table = document.getElementById("filme");
	
	database.on('value', (snap) => {
		snap.forEach(function(data){
			var val = data.val();
			
			//const filme = new Filme(val.nome, val.ano, val.diretor);
			//console.log(filme.toString);		
			//elemento.innerHTML = elemento.innerHTML + filme.toString;
			
			////$('#filme').append(filme.toString);
			
			var row = table.insertRow(0);
			
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);	
			var cell3 = row.insertCell(1);				
			
			cell1.innerHTML = val.nome;
			cell2.innerHTML = val.ano;
			cell3.innerHTML = val.diretor;
		});
	});
}

function escolheConexao(aleatorio) {
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

