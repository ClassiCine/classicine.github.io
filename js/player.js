var app = angular.module("player", []);
var filme = JSON.parse(sessionStorage.getItem('filme'));

app.controller('PlayerController', function ($scope){
	$scope.titulo = filme.nome;
	$scope.ano = filme.ano;
	$scope.nota = filme.nota;
	$scope.duracao = filme.duracao;
	$scope.diretor = filme.diretor;
	$scope.sinopse = filme.sinopse;
});

app.controller('FramePlayer', ['$scope', '$sce', function ($scope, $sce) {
	if(filme.links[0].url != '') {
		console.log(filme.links[0].url);
		$scope.url = $sce.trustAsResourceUrl(filme.links[0].url);
	} else {
		console.log(filme.links[1].url);
		$scope.url = $sce.trustAsResourceUrl(filme.links[1].url);
	}
}]);
