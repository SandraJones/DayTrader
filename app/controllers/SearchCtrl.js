"use strict"

app.controller('SearchCtrl', ["$scope", "$location", "StockFactory",
	 function($scope, $location, StockFactory){
	 	console.log("SearchCtrl loaded");
	 	$scope.getStocks = "";
	 	$scope.stocks = [{
	 		"Ticker": "",
			"Open": "",
			"Close": "",
			"High": "",
			"Low": "",
			"Volume": "",
			"Id": "",
			"Date": "",
			"uid": "",
			"isFave": ""
	 	}];

	 	$scope.stocksList = [];

	 	$scope.getStocks = function(){
	 		console.log("getStocksLoaded");
	 		StockFactory.getStocks($scope.getStocks).then(function(stockReturn){
	 			$scope.stock = stockReturn.Search;
	 		});
	 	}
	 }]);