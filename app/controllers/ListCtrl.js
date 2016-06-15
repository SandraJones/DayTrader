"use strict";

app.controller("ListCtrl", 
	["$scope", "$location", "StockFactory",
  function($scope, $location, StockFactory){
  	console.log("ListControllerLoaded");
  	$scope.searchQuandl = "";
  	$scope.addFave = {};

  $scope.getFavorites = function(){
  	console.log("getFavoritesFunction");
  	StockFactory.getFaves()
  	.then(function(data){
  		$scope.stocks = [];
  		for (var stock in data){
  			data[stock].id = stock
  			$scope.stocks.push(data[stock]);
  		}
  	})
  }

  $scope.showFavorites = function(stock){
  	console.log("showFavoritesFunction");
  	let selectedStock = {
  		 open: stock.open,
  		 close: stock.close,
  		 volume: stock.volume,
  		 date: stock.date,
  		 isFave: false
  	}
  	StockFactory.addFaveToFavorites(selectedStock);
  }

  $scope.deleteStock = function(data{
  	console.log("deleteStockfunction ready");
  	StockFactory.deleteStockFromFaves(data.id)
  	.then(function(){
  		$scope.showFavorites();
  	})
  })	
}]);