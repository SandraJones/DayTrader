"use strict"
app.controller('SearchCtrl', ["$scope", "$location", "StockFactory",
	 function($scope, $location, StockFactory){
	 	$scope.getAStock;
	 	$scope.stockArray;
	 	$scope.stockFave;

	 	$scope.searchAStock = function(){
	 		StockFactory.getStocks($scope.getAStock).then(function(stockReturn){
	 			$scope.stockArray = stockReturn.dataset.data[0];
	 		});
	 	}

	 	// $scope.addAStock = function(stockArray){
	 	//  	$scope.stockFave = returnedFave;
	 	// 		function toObject(stockFave) {
  	// 	// 		var rv = {};
  		// 			for (var i = 0; i < $stock.stockFave.length; ++i){
    // 					if (stockFave[i] !== undefined){ 
    // 						rv[i] = stockFave[i];
  		// 					return rv;
				// 			}
  		// 				console.log(rv);
	 	 // 				}
				// .success(
				// function(objectF){
				// resolve(objectF);
				// });
		// 		};
		// };
}]);