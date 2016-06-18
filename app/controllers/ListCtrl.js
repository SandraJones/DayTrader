"use strict";

app.controller("ListCtrl", 
	["$scope", "StockFactory", "firebaseURL",
  function($scope, StockFactory, firebaseURL){
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
  	
  }

  $scope.addStockToFavorites = function(){
  var ref = new Firebase(firebaseURL);

  var userFavorite = JSON.stringify({
          ticker: newStock.ticker,
          open: newStock.ticker,
          close: newStock.close,
          high: newStock.high,
          low: newStock.low,
          volume: newStock.volume,
          id: newStock.id,
          date: newStock.date,
          uid: ref.getAuth().uid
          //isFave: newStock.isFave
        });
  console.log("userFavorite", userFavorite);
  StockFactory.addStockToFavorites(userFavorite);
}




  $scope.deleteStock = function(data) {
  	console.log("deleteStockfunction ready");
  	StockFactory.deleteStockFromFaves(data.id)
  	.then(function(){
  		$scope.showFavorites();
  	})
  }	


  $scope.clearNotes = function(input){
  	console.log("clearNotesButton function");
  }
  $scope.addToNotes = function(input){
  	console.log("addToNotesFunction");
  }
}]);