"use strict"

app.controller("NotesCtrl", function($scope, StockFactory){
  // $scope.CollectionOfNotes;
  $scope.delNote;
  $scope.CollectionOfNotes = StockFactory.getNoteCollection();

  // $scope.notes=[];
  $scope.delNote = function(Notes){
    StockFactory.deleteNote(Notes).then(function(response){
  		StockFactory.getNotes().then(function(NoteCollection){
  			$scope.CollectionOfNotes = NoteCollection;
        console.log("$scope.notes", $scope.CollectionOfNotes);
  		});
  	});
	};
  // $scope.editNote = function(Notes){
  //   StockFactory.deleteNote(Notes).then(function(response){
  //   });
  //   StockFactory.addToNotes(Notes); 
  // };
}); 	