
angular.module("js12",[])

angular.module("js12")
	.controller("js12Troller",["$scope", "$filter", "$window", "$timeout", function($scope, $filter, $window, $timeout) {

		$scope.mouseClickValues = [
			{x : 0},
			{y : 0}
		]



		$scope.mouseClick = function(event) {
			mouseClickValues[0].x = event.clientX
						mouseClickValues[0].x = event.clientX

			console.log(mouseClickValues)
		}

	}])