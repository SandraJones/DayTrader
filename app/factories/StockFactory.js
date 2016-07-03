"use strict";

app.factory("StockFactory", function(firebaseURL, $q, $http, AuthFactory){

	var FaveCollection;

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
  
	var getFaves = function(){
	var Faves = [];
	let uid = AuthFactory.getUser();
		return $q(function(resolve, reject){
			console.log("getFavesrunning inside StockFactory");
		$http.get(`${firebaseURL}Favorites.json?${uid}`)	
			.success(function(FaveObject) {
				FaveCollection = FaveObject;
				Object.keys(FaveCollection).forEach(function(key){
					FaveCollection[key].id=key;
					Faves.push(FaveCollection[key]);
				});
				resolve(Faves);
				console.log(Faves);
				})
			.error(function(error){
				reject(error);
			});
			});
	};

	var getCollection = function(){
		return FaveCollection;
	}

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
		addStockToFavorites:addStockToFavorites, getFaves:getFaves, getCollection:getCollection,
		getStocks:getStocks,  addToNotes:addToNotes
	};
});
