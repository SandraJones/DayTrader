"use strict"

app.controller("NotesCtrl", function($scope, $location, StockFactory){
  // $scope.CollectionOfNotes;
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
        console.log("$scope.notes", $scope.CollectionOfNotes);
          });
      });
    };
  $scope.editNote = function(Notes){
    console.log(" editNote function Notes", Notes);
    $location.path('/notes/'+ Notes.uid);
  };     
});