"use strict";

app.factory("StockFactory", function($scope, $location, $http, $routeProvider){
	$scope.stocks = {};


	var getFaves = function(){
		return $q(function(resolve, reject){
			$http.get(firebaseURL+ "userId" + ".json")
			.success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);
				});
			});
	};

  var addFaveToFavorites = function(stock){
  	return $q(function(resolve, reject) {
  		$http.post(
  			firebaseURL + "movies" + ".json",
  			)
  		.success(
  			function(objectFromFirebase){
  				resolve(objectFromFirebase);
  			});
  	});
  };
  //put ng-click on the appropriate html


		//Quandl api call to return a stockObject for display in DOM in pageThreeView
	var getStocks = function(stock){
		return $q(function(resolve, reject){
			$http.get(`https://www.quandl.com/api/v3/datasets/WIKI/IBM.json?start_date=2016-06-07&end_date=2016-06-13&open&high&low&close&api_key=hyrU1YpXzusZztWa9iYY`)
			.success(function(stockData){
				resolve(stockData);
				}, function(error){
					  reject(error);
				});			
			});
		};
		
	var deleteStockFromFaves function(stock){
		return $q(function(resolve, reject){
			$http.delete(
				firebaseURL + "stocks/" + "stockId" + ".json")
			.success(
				 function(objectFromFirebase) {
				 	 resolve(objectFromFirebase);
				 });
		  });
		};

	return {
		addFaveToFavorites:addFaveToFavorites, getFaves:getFaves, getStocks:getStocks, deleteStockFromFaves:deleteStockFromFaves
  };
});