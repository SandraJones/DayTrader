"use strict";

app.factory("StockFactory", function($scope, $location, $http, $routeProvider){
	$scope.stocks = {};


	StockFactory.getFaves = function(){
		return $q(function(resolve, reject){
			$http.get("firebaseURL"+ userId + ".json")
			.success()
	
			});
	}

	//StockFactory.addFaveToFavorites = function


	//StockFactory.getStocks(){
		//Quandl api call to return a stockObject
		//for display in DOM in pageThreeView

		//}


});