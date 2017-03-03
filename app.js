var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when("/", {
		template : "<div class='container'><h3>Home.</h3><p></p></div>"
	})
	.when("/addExpense", {
		templateUrl : "addExpense.html",
		controller: 'expenseController'
	})
	.when("/listExpense", {
		templateUrl : "expensesTable.html",
		controller: 'expenseController'
	})
	.otherwise({
		template : "<h1>None</h1><p>Nothing has been selected</p>"
	});
}]);
