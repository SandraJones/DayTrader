"use strict"

app.controller("NotesCtrl", function($scope, StockFactory){
  // $scope.CollectionOfNotes;
  $scope.delNote;
  $scope.CollectionOfNotes = StockFactory.getNoteCollection();
  
  // $scope.notes=[];
  $scope.delNote = function(Notes){
    console.log("Notes", Notes);
    StockFactory.deleteNote(Notes).then(function(response){
  		StockFactory.getNotes().then(function(NoteCollection){
  			$scope.CollectionOfNotes = NoteCollection;
        console.log("$scope.notes", $scope.CollectionOfNotes);
  		});
  	});
	};
});	 	