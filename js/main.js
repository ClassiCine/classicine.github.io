var app = angular.module("main", []);
var conexao = escolheConexao();
var firebase = new Firebase(conexao);
var database = firebase.ref().child('categoria');

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
	// options
	cellAlign: 'left',
	contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
	// options
});

app.controller('MainController', ['$scope', '$timeout', function($scope, $timeout){
	
	database.on('value', function(snap) {
		$timeout(function() {
			$scope.categorias = snap.val();
			$scope.linkFilme = 'html/player.html';
		});
	});
	
	$scope.assistir = function(filme){
		sessionStorage.setItem('filme', JSON.stringify(filme));
	}
}]);

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