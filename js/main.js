var app = angular.module("main", ['ui.bootstrap']);
var conexao = escolheConexao();
var firebase = new Firebase(conexao);
var database = firebase.ref().child('categoria');

app.controller('MainController', MainController);

function MainController($scope, $timeout) {
	$scope.noWrapSlides = false;
	$scope.activeSlide = 0;
			
	database.on('value', function(snap) {
		$timeout(function() {
			$scope.categorias = snap.val();
		});
	});
		
	$scope.assistir = function(filme){
		sessionStorage.setItem('filme', JSON.stringify(filme));
	}
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