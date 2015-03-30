app = angular.module('editorApp', []);
app.controller("MainController", ['$scope', '$sce', function($scope, $sce) {

	//Modifiable models
	$scope.html = '<body>'+
	'\n\t<h1>Hello World</h1>'+
	'\n</body>';

	$scope.css = 'h1{'+
	'\n\tcolor:#007092;'+
	'\n\ttext-align:center;'+
	'\n\tmargin:60px 0px;'+
	'\n}';


	//Used for wrapping the html and css
	$scope.head_s = '<!DOCTYPE HTML>'+
	'\n<html>'+
	'\n\t<head>'+
	'\n<style>';

	$scope.head_e = '\n</style>'+
	'\n\t</head>';
	

	//Resultant model
	$scope.myHTML = $scope.head_s +  $scope.css + $scope.head_e + $scope.html + '\n</html>';
	$scope.myHTMLSafe = $sce.trustAsHtml($scope.myHTML);

	//Updates the result with every change
	$scope.update = function(){
		$scope.myHTML = $scope.head_s +  $scope.css + $scope.head_e + $scope.html + '\n</html>';
		$scope.myHTMLSafe = $sce.trustAsHtml($scope.myHTML);

	};
}]);