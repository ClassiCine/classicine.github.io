var app = angular.module('index', []);

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

function setArrayDatabase(database, callback) {
	var names = [];

	database.on('value', (snap) => {
		snap.forEach(function(data){
			let val = data.val();
			names.push(val.nome);
		});
		
		console.log(names);
		callback(names);	
	});
}

	app.controller('IndexController', function($scope) {
		
		var conexao = escolheConexao();
		var firebase = new Firebase(conexao);
		var database = firebase.ref().child('categoria');
		
		//$scope.categorias = [];
		
		$scope.getCategorias = function(){
			setArrayDatabase(database, function(names) {
				$scope.categorias = names;
				console.log("1", $scope.categorias);
			});
		}		
		
		//console.log("2", $scope.categorias);
	});
