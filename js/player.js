var app = angular.module("player", []);
var filme = JSON.parse(sessionStorage.getItem('filme'));

app.controller('PlayerController', PlayerController);

function PlayerController($scope) {
	if(filme.links[0].url != '') {
		console.log(filme.links[0].url);
		$scope.url = filme.links[0].url;
	} else {
		console.log(filme.links[1].url);
		$scope.url = filme.links[1].url;
	}
	
	$scope.titulo = filme.nome;
	$scope.ano = filme.ano;
	$scope.nota = filme.nota;
	$scope.duracao = filme.duracao;
	$scope.diretor = filme.diretor;
	$scope.sinopse = filme.sinopse;
	$scope.img = filme.imagem;
}

app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);