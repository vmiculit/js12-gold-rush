
angular.module("js12",[])

angular.module("js12")
	.controller("js12Troller",["$scope", "$filter", "$window", "$timeout", function($scope, $filter, $window, $timeout) {

		$scope.goldFinds = []

		$scope.mouseClick = function(event) {
			var positionOffset = 14
			var x = event.pageX - positionOffset
			var y = event.pageY - positionOffset

			$scope.goldFinds.push({ x: x, y: y})
		}

		$scope.removeMarker = function(idx) {
			$scope.goldFinds.splice(idx, 1)
		}

	}])

			





