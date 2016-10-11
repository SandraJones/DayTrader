"use strict";

app.factory("StockFactory", function(firebaseURL, $q, $http, AuthFactory){

  var FaveCollection;
  var NoteCollection;
  var Notes;

  var addStockToFavorites = function(Favorite){    
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
	  $http.get(`${firebaseURL}Favorites.json?${uid}`)    
	    .success(function(FaveObject) {
	       FaveCollection = FaveObject;
	       Object.keys(FaveCollection).forEach(function(key){
	       		FaveCollection[key].id=key;
	          Faves.push(FaveCollection[key]);
	          });
	          resolve(Faves);
	          })
	      		.error(function(error){
	          reject(error);
	      		});
	  });
  };

  var getNotes =function (){
    Notes = [];
    let uid = AuthFactory.getUser();
    return $q(function(resolve, reject){
      $http.get(`${firebaseURL}Notes.json?${uid}`)
      .success(function(NoteObject){
         var NoteCollection = NoteObject;
         Object.keys(NoteCollection).forEach(function(key){
           NoteCollection[key].uid=key;
           Notes.push(NoteCollection[key]);
          });
          resolve(Notes);
      })
      	.error(function(error){
        reject(error);
      });
    });
  };

  var getNoteCollection = function(){
    return  Notes;
  }

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
    return $q(function(resolve, reject) {
      $http.post(firebaseURL + "Notes.json", Note)
    })
    .then(
      function(NoteToFirebase){
        resolve(NoteToFirebase);
      });
	};    

  var deleteFave = function(Fave){
      return $q(function(resolve, reject){
        $http
        	.delete(firebaseURL + "Favorites/" + Fave.id + ".json")
        	.then(function(response){
            resolve(response);
        });
      });
  };

  var deleteNote = function(Notes){
    return $q(function(resolve, reject){
      $http
        .delete(firebaseURL + "Notes/" + Notes.uid + ".json")
        .then(function(response){
            resolve(response);
        });
      });
  };

  var getSingleNote = function(noteId){    
    return $q(function(resolve, reject){
      $http.get(firebaseURL + "Notes/" + noteId + ".json")
        .success(function(noteObject) {
           resolve(noteObject);
        });
    });        
  };
    
  var updateNote = function(noteId, note){
      return $q(function(resolve, reject) {
        $http.put(
          firebaseURL + "Notes/" + noteId + ".json",
          JSON.stringify({
            string: note.string  
          })
        )
        .success(
          function(objectFromFirebase) {
            resolve(objectFromFirebase);
          }
        );
      });
  };

  return {
      addStockToFavorites:addStockToFavorites, updateNote:updateNote,  getFaves:getFaves, getCollection:getCollection, deleteFave:deleteFave,
      deleteNote:deleteNote, getStocks:getStocks,  addToNotes:addToNotes, getNotes:getNotes, getSingleNote:getSingleNote, getNoteCollection:getNoteCollection
  };

});