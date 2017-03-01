var expenseController = angular.module('expenseController', []);
expenseController.controller('expenseController', function($scope, $http) {

	$http.get("https://challengeacceptedglobant.herokuapp.com/expenses")
	.then(function(response) {
		$scope.expenses = response.data;
		console.log($scope.expenses);
	});
	
	$scope.clicked = function(expense){
		console.log(expense);
	}
});
