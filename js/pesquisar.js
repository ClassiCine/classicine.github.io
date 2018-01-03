var app = angular.module("pesquisa", ['ui.bootstrap']);
var conexao = escolheConexao();
var firebase = new Firebase(conexao);
var data = firebase.child('categoria');
var arr = [];

var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('nome'));

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
		});
	});
	
	$scope.filmes = arr;
	console.log(arr);
}

var a = ["foo","fool","cool","god"];

var search_term = 'oo'; // your search term as string
var search = search_term;
var array = jQuery.grep(a, function(value) {
    return value.indexOf(search) >= 0;
});

console.log(a);
console.log(array);

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