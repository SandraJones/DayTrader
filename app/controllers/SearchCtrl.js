"use strict"
app.controller('SearchCtrl', ["$scope", "$location", "StockFactory", "AuthFactory",
	 function($scope, $location, StockFactory, AuthFactory){
	 	$scope.getAStock;
	 	$scope.stockArray;
	 	$scope.stockFave;
	 	

	 	$scope.searchAStock = function(){
	 		StockFactory.getStocks($scope.getAStock).then(function(stockReturn){
	 			$scope.stockArray = stockReturn.dataset.data[0];
	 		});
	 	};

	 	$scope.addAStock = function(){
	 		var currentUser = AuthFactory.getUser();
	 		console.log("user", currentUser);
	 	 	let Favorite = {
	 	 		"name": $scope.getAStock,
				"date": $scope.stockArray[0],
				"close": $scope.stockArray[1],
	 			"uid": currentUser
			};
			StockFactory.addStockToFavorites(Favorite);
	 	 	};
}]);