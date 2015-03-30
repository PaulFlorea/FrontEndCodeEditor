app = angular.module('myApp', []);

app.controller("MainController", ['$scope', '$sce', function($scope, $sce) {

	$scope.html = '<body>'+
	'\n\t<h1>Hello World</h1>'+
	'\n</body>';
	

	$scope.css = 'h1{'+
	'\n\tcolor:#007092;'+
	'\n\ttext-align:center;'+
	'\n\tmargin:60px 0px;'+
	'\n}';

	$scope.head_s = '<!DOCTYPE HTML>'+
	'\n<html>'+
	'\n\t<head>'+
	'\n<style>';

	$scope.head_e = '\n</style>'+
	'\n\t</head>';
	

	$scope.myHTML = $scope.head_s +  $scope.css + $scope.head_e + $scope.html + '\n</html>';
	$scope.myHTMLSafe = $sce.trustAsHtml($scope.myHTML);

	$scope.update = function(){
		$scope.myHTML = $scope.head_s +  $scope.css + $scope.head_e + $scope.html + '\n</html>';
		$scope.myHTMLSafe = $sce.trustAsHtml($scope.myHTML);

	};
}]);