
angular.module("js12",[])

angular.module("js12")
	.controller("js12Troller",["$scope", "$filter", "$window", "$timeout", function($scope, $filter, $window, $timeout) {

		$scope.goldFinds = []

		$scope.mouseClick = function(event) {
			var positionOffset = 14
			var x = event.pageX - positionOffset
			var y = event.pageY - positionOffset
			var notes = ""

			$scope.goldFinds.push({ x: x, y: y, notes: notes, shownote: false, showinput: true})
			console.log($scope.goldFinds)
		}
			// testing my github connectivity
			
		$scope.removeMarker = function(idx) {
			if ($scope.goldFinds[idx].notes != "") {
			$scope.goldFinds.splice(idx, 1)
			}
		}

		$scope.displayNote = function(idx) {

			if ($scope.goldFinds[idx].notes != "") {

			$scope.goldFinds[idx].shownote = true

			}
		}

		$scope.hideNote = function(idx) {

			if ($scope.goldFinds[idx].notes != "") {

			$scope.goldFinds[idx].shownote = false

			}
		}

		$scope.addNote = function(idx, placeNote) {

			$scope.goldFinds[idx].notes = placeNote
			$scope.goldFinds[idx].showinput = false

		}

	}])

			





