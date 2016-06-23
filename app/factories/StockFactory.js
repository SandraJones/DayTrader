"use strict";

app.factory("StockFactory", function(firebaseURL, $q, $http){

	var getFaves = function(){
		console.log("getFavesFunctionready");
		return $q(function(resolve, reject){
			$http.get(firebaseURL+ "uid" + ".json")
			.success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);
				});
			});
	};

//converting array to object for saving to Firebase
  var addStockToFavorites = function(stockData){
  	console.log("addStockToFavoritesFired");
  	function toObject(stockData) {
  		var rv = {};
  		for (var i = 0; i < stockData.length; ++i)
    		if (stockData[i] !== undefined) 
    			rv[i] = stockData[i];
  				return rv;
			}
  	console.log(rv);
  	return $q(function(resolve, reject) {
  		$http.post(firebaseURL + "stocks.json", rv)
  	})
  	.success(
			function(objectFromFirebase){
				resolve(objectFromFirebase);
		});
  };

		//Quandl api call to return a stockObject for display in DOM in pageThreeView
	var getStocks = function(stock){
		return $q(function(resolve, reject){
			$http.get(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}
.json?api_key=hyrU1YpXzusZztWa9iYY&column_index=4&rows=1`)
			.success(function(stockData){
				console.log("stockdata", stockData);
				resolve(stockData)
					// .then pullValueFromArrayinArrayInObject(){
					// 	//.success()
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
		clearNotes:clearNotes, addToNotes:addToNotes};
});