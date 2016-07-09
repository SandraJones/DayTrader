"use strict"

app.controller("NotesCtrl", function($scope, $location, StockFactory){
  
  $scope.delNote;
  $scope.CollectionOfNotes = StockFactory.getNoteCollection();
  $scope.newNote;
  $scope.selectedString;
  $scope.objectFromFirebase;
  $scope.singleNote;
  $scope.selectedStringFromNote;
  $scope.Notes;

  $scope.delNote = function(Notes){
    StockFactory.deleteNote(Notes).then(function(response){
      StockFactory.getNotes().then(function(NoteCollection){
        $scope.CollectionOfNotes = NoteCollection;
      });
      });
    };
  $scope.editNote = function(Notes){
    $location.path('/notes/'+ Notes.uid);
  };     
});