app.controller('expenseController', ['expenseService', '$scope', '$http', function(expenseService, $scope, $http) {

	expenseService.listExpenses().then(function(response){
		console.log("Entro:" );
		$scope.expenses = response.data;
	})

	$scope.clicked = function(expense){
		console.log(expense);
	}
}]);
