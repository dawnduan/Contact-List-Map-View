var myApp = angular.module('myApp', ['ngMap']);
myApp.controller('mainCtrl', function ($scope) {
	"use strict";
	//	PPL Info
	$scope.ones = [
		{
			"name": 'A'
			, "address": "[40, -75]"
			, "id": 1
		}
		, {
			"name": 'C'
			, "address": "[45, -80]"
			, "id": 2
		}
		, {
			"name": 'B'
			, "address": "[35, -65]"
			, "id": 3
		}
		, {
			"name": 'F'
			, "address": "[20, -65]"
			, "id": 4
		}
		, {
			"name": 'Z'
			, "address": "2000 Bay St, Toronto"
			, "id": 5
		}
	];
	//	Search Feature of List
	$scope.sortField = 'rdm';
	$scope.reverse = true;
	//	Map Info: center, InfoWindowPop Setup
	$scope.center = 'NYC';
	$scope.showDetail = function (event, one) {
		$scope.selectedOne = one;
		$scope.map.showInfoWindow('detail', this);
	};
});