"use strict"
app.controller('SearchCtrl', ["$scope", "$location", "StockFactory", "AuthFactory",
	 function($scope, $location, StockFactory, AuthFactory){
	 	$scope.getAStock;
	 	$scope.stockArray;
	 	$scope.stockFave;
	 	$scope.addANote;
	 	$scope.notes;
	 	

	 	$scope.searchAStock = function(){
	 		StockFactory.getStocks($scope.getAStock).then(function(stockReturn){
	 			$scope.stockArray = stockReturn.dataset.data[0];
	 		});
	 	};

	 	$scope.addAStock = function(){
	 		var currentUser = AuthFactory.getUser();
	 	 	let Favorite = {
	 	 		"name": $scope.getAStock,
				"date": $scope.stockArray[0],
				"close": $scope.stockArray[1],
	 			"uid": currentUser
			};
			StockFactory.addStockToFavorites(Favorite);
	 	 	};

	 	 $scope.addANote = function(notes){
	 		var currentUser = AuthFactory.getUser();
	 	 	let Note = {
	 	 		"string": $scope.notes,
	 			"uid": currentUser
			};
			StockFactory.addToNotes(Note);
	 	 	};	
	
}]);

