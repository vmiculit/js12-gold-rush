
angular.module("js12",[])

angular.module("js12")
	.controller("js12Troller",["$scope", "$filter", "$window", "$timeout", function($scope, $filter, $window, $timeout) {

		$scope.goldFinds = []


		$scope.mouseClick = function(event) {
			var x = event.clientX - 5
			var y = event.clientY - 5
			var id = x * y
			$scope.goldFinds.push({id: id,
							x: x,
							y: y})
			console.log($scope.goldFinds)
		}

	}])
//test
