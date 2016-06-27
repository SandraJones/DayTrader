"use strict";

app.factory("StockFactory", function(firebaseURL, $q, $http){

	
  var addStockToFavorites = function(Favorite){	
  	console.log("Favorite", Favorite);
  	return $q(function(resolve, reject) {
  		$http.post(firebaseURL + "Favorites.json", Favorite)
  	})
  	.then(
			function(FavoriteToFirebase){
				resolve(FavoriteToFirebase);
		});
  };

		//Quandl api call to return a stockObject for display in DOM 
	var getStocks = function(stock){
		return $q(function(resolve, reject){
			$http.get(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?api_key=hyrU1YpXzusZztWa9iYY&column_index=4&rows=1`)
			.success(function(stockData){
				resolve(stockData)
			}, function(error){
					  reject(error);
				});
			});			
		};



	var addToNotes = function(Note){
  	console.log("functionAddToNotes");
  	return $q(function(resolve, reject) {
  		$http.post(firebaseURL + "Notes.json", Note)
  	})
  	.then(
			function(NoteToFirebase){
				resolve(NoteToFirebase);
		});
  };	

	return {
		addStockToFavorites:addStockToFavorites, 
		getStocks:getStocks,  addToNotes:addToNotes
	};
});
