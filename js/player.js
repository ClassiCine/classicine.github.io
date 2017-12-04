var app = angular.module("player", []);
var filme = JSON.parse(sessionStorage.getItem('filme'));

app.controller('PlayerController', function ($scope){
	
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
