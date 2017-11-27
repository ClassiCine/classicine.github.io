var firebase = new Firebase('https://cineclassico-4d826.firebaseio.com');   			
var database = firebase.ref().child('filmes');

database.on('value', (snap) => {		
	snap.forEach(function(data){
		var content = '';
		var val = data.val();
					
		content += 'Filme: ' + val.nome;
		content += ' - Ano: ' + val.ano;
		content += ' - Diretor: ' + val.diretor;
		content += '<br/>';
					
		console.log(content); 
		$('#mensagens').append(content);
	});
});