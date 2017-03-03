app.service('expenseService',['$http', function($http) {

	var listExpenses = function(){
		console.log("Algo");
		return $http.get('https://challengeacceptedglobant.herokuapp.com/expenses');
	};

	return {
	listExpenses : listExpenses
	}


}]);		
