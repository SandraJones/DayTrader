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
	 		console.log("getAStockFunctionLoaded");
	 		StockFactory.getStocks($scope.getAStock).then(function(stockReturn){
	 			$scope.stockArray = stockReturn.dataset.data[0];
	 			// console.log("stockReturn", stockReturn);
	 			// console.log("stockReturn", stockReturn[0]);
	 			// console.log("stockReturn[3]", stockReturn)
	 			// let stockArray = stockReturn.split(",");
	 			// console.log("stockArray", stockArray);
	 				 			// $scope.stock = stockReturn.dataset;
	 			// $scope.stock. = stockReturn.; 
	 			// $scope.getAStock = "";
	 			// console.log("$scope.stock", $scope.stock);
	 			// pullValueFromArrayInArrayInObject($scope.stock.data);	
	 		});
	 	}

// //$SCOPE.STOCK.OBJECT.ARRAY.ARRAY.KEY.VALUE
// 	 var pullValueFromArrayInArrayInObject = function(dailyPriceData){
// 	 	 		for (var i=0; i<dailyPriceData.length; i++) {
// 	 	 			var dayInfo = dailyPriceData[i][0];
// 	 	 			$scope.stockObj.Dates = {
// 	 	 				 date: {
// 	 	 					Close: "",
// 	 	 					Open: "",
// 	 	 					High: "",
// 	 	 					Low: "",
// 	 	 					Volume: ""
// 	 	 				}
// 	 	 			}; 
// 	 	 		}
// 	 			console.log("$scope.stockObj", $scope.stockObj);
// 	 	 };
}]);