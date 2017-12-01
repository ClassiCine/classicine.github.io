var app = angular.module("index", []);
var conexao = escolheConexao();
var firebase = new Firebase(conexao);
var database = firebase.ref().child('categoria');

app.controller('IndexController', ["$scope", "$timeout", function($scope, $timeout){
	
	database.on('value', function(snap) {
		
		$timeout(function() {
			$scope.categorias = snap.val();
			$scope.linkFilme = "html/player.html";
		});
	});
	
	
}]);

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