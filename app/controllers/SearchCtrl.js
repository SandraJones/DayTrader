"use strict"
app.controller('SearchCtrl', ["$scope", "$location", "StockFactory",
	 function($scope, $location, StockFactory){
	 	$scope.getAStock;

	 	$scope.searchAStock = function(){
	 		console.log("getAStockFunctionLoaded");
	 		StockFactory.getStocks($scope.getAStock).then(function(stockReturn){
	 			$scope.stock = stockReturn.dataset;
	 			$scope.stock.name = stockReturn.dataset.name; 
	 			$scope.getAStock = "";
	 			console.log("$scope.stock", $scope.stock);
	 		});
	 	}
	 }]);