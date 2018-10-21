
var app = angular.module('myApp', []);
	
	app.controller('myCtrl', function($scope){

		$scope.firstname = "John Ellee";
		$scope.lastname = "Robado";

		$scope.sum = function(){

			var num1 = parseInt($scope.no1);
			var num2 = parseInt($scope.no2);

			return num1 + num2;
		}

		$scope.diff = function(){

			var num1 =  parseInt($scope.no1);
			var num2 = parseInt($scope.no2);
			
			return num1 - num2;
		}


		$scope.product = function(){

			var num1 =  parseInt($scope.no1);
			var num2 = parseInt($scope.no2);
			
			return num1 * num2;
		}


		$scope.quotient = function(){

			var num1 =  parseInt($scope.no1);
			var num2 = parseInt($scope.no2);
			
			return num1 / num2;
		}
});