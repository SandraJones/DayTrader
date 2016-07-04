"use strict"
app.controller('SearchCtrl', ["$scope", "$location", "StockFactory", "$timeout", "AuthFactory",
	 function($scope, $location, StockFactory, $timeout, AuthFactory){
	 	$scope.getAStock;
	 	$scope.stockArray;
	 	$scope.stockFave;
	 	$scope.addANote;
	 	$scope.notes;
 	 	$scope.Faves = [];
 		$scope.selectedItem = {};
 		$scope.useListOfFaves;
 		$scope.SavedNotes;
	 	
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
	 	 		"string": $scope.notes[0],
	 			"uid": currentUser
			};
			StockFactory.addToNotes(Note);
	 	 	};	

	 	 	$scope.getSavedNotes = function(){
	 	 		StockFactory.getNotes().then(function(Notes){
	 	 			$scope.SavedNotes = Notes;
	 	 			$scope.selectedItem = $scope.SavedNotes.filter(function(uid){
	 	 				return $scope.selectedItem;
	 	 				$timeout();
	 	 				$location.path('/notes');
	 	 			});
	 	 		});
	 	 	}; 

	 	 	$scope.useListOfFaves = function(){
		    StockFactory.getFaves().then(function(FaveCollection){
		        console.log("FaveCollection from promise", FaveCollection);
		        $scope.Faves = FaveCollection;
		        console.log("$scope.Faves", $scope.Faves);
		        $scope.selectedItem = $scope.Faves.filter(function(uid){
					return $scope.selectedItem;
					$timeout();
					$location.path('/list');
				});
		        console.log("selectedITem in ctrller getFaves function", $scope.selectedItem);
		   })};

}]);