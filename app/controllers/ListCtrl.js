"use strict";

app.controller("ListCtrl", 
	["$scope", "StockFactory",
  function($scope, StockFactory){
  	console.log("ListControllerLoaded");
  	$scope.searchQuandl = "";
  	$scope.addFave = {};
    $scope.notes = [""];

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
  		 ticker: stock.ticker,
  		 open: stock.open,
  		 close: stock.close,
  		 high: stock.high,
  		 low: stock.low,
  		 volume: stock.volume,
  		 id: stock.id,
  		 date: stock.date,
  		 isFave: false,
			 uid: ""	
  	}
  	StockFactory.addFaveToFavorites(selectedStock);
  }

  $scope.deleteStock = function(data) {
  	console.log("deleteStockfunction ready");
  	StockFactory.deleteStockFromFaves(data.id)
  	.then(function(){
  		$scope.showFavorites();
  	})
  }	

//do these belong here at all; do they need to be referenced here since we have them in html that this controller controls?
  $scope.clearNotes = function(input){
  	console.log("clearNotesButton function");
  }
  $scope.addToNotes = function(input){
  	console.log("addToNotesFunction");
  }
}]);