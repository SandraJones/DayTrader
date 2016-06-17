"use strict";

app.factory("StockFactory", function(firebaseURL, firebase, $http){

	var getFaves = function(){
		console.log("getFavesFunctionready");
		return $q(function(resolve, reject){
			$http.get(firebaseURL+ "userId" + ".json")
			.success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);
				});
			});
	};

  var addStockToFavorites = function(stock){
  	console.log("addStockToFavorites fired");
  	let user = AuthFactory.getUser();
  	console.log("user", user);
  	return $q(function(resolve, reject) {
  		$http.post(
  			firebaseURL + "stocks.json",
  			JSON.stringify({
  				ticker: newStock.ticker,
					open: newStock.ticker,
					close: newStock.close,
					high: newStock.high,
					low: newStock.low,
					volume: newStock.volume,
					id: newStock.id,
					date: newStock.date
  				})
  			)
  		.success(
  			function(objectFromFirebase){
  				resolve(objectFromFirebase);
  			});
  	});
  };

		//Quandl api call to return a stockObject for display in DOM in pageThreeView
	var getStocks = function(stock){
		console.log("getStocksFunctionFired");
		return $q(function(resolve, reject){
			$http.get(`https://www.quandl.com/api/v3/datasets/WIKI/MMM.json?start_date=2016-06-07&end_date=2016-06-13&open&high&low&close&api_key=hyrU1YpXzusZztWa9iYY`)
			.success(function(stockData){
				resolve(stockData);
				}, function(error){
					  reject(error);
				});			
			});
		};
		
	var deleteStockFromFaves = function(stock){
		console.log("deleteStockFromFavesFunction");
		return $q(function(resolve, reject){
			$http.delete(
				firebaseURL + "stocks/" + "stockId" + ".json")
			.success(
				 function(objectFromFirebase) {
				 	 resolve(objectFromFirebase);
				 });
		  });
		};

//or should this be one edit function that overwrites the content of the whole notes string?
	var clearNotes = function(){
		return $q(function(resolve, reject) {
			$http.delete(
				firebaseURL + "notes/" + "noteId" + ".json")
			.success(
				function(stringFromFirebase) {
					resolve(stringFromFirebase);
				});
		});
	};

	var addToNotes = function(){
		return $q(function(resolve, reject){
			//put probably
			$http.post

		})
	};

	return {
		addStockToFavorites:addStockToFavorites, getFaves:getFaves, 
		getStocks:getStocks, deleteStockFromFaves:deleteStockFromFaves, 
		clearnotes:clearNotes, addToNotes:addToNotes};
});