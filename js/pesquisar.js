var app = angular.module("pesquisa", ['ui.bootstrap']);
var conexao = escolheConexao();
var firebase = new Firebase(conexao);
var arr = [];
var data = firebase.child('categoria');

var urlParams = new URLSearchParams(window.location.search);
app.controller('PesquisaController', PesquisaController);

function PesquisaController($scope, $timeout) {
	$scope.noWrapSlides = false;
	$scope.activeSlide = 0;
	
	data.on('value', function(snapshot) {	
		$timeout(function() {
			snapshot.forEach(function(snap) {
				var filmes = snap.val().filmes;
				filmes.forEach(function(filme) {
					arr.push(filme);
				});
			}); 

			var search_term = urlParams.get('nome');
			var search = search_term.toLowerCase();
			
			var array = jQuery.grep(arr, function(value) {
				return value.nome.toLowerCase().indexOf(search) >= 0;
			});
			
			$scope.filmes = array;
			if(array.length == 0) {
				$scope.mensagem = "Nenhum filme encontrado";
			}
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