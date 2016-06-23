"use strict"
app.controller('SearchCtrl', ["$scope", "$location", "StockFactory",
	 function($scope, $location, StockFactory){
	 	$scope.getAStock;
	 	$scope.stockArray;
	 	$scope.getKeys;
	 	$scope.stockObj = {
	 		Name: "",
	 		Dates: {}
	 	};


	 	$scope.searchAStock = function(){
	 		StockFactory.getStocks($scope.getAStock).then(function(stockReturn){
	 			$scope.stockArray = stockReturn.dataset.data[0];
	 		});
	 	}
}]);