"use strict"

app.controller("NotesCtrl", function($scope, StockFactory){
  
  // $scope.CollectionOfNotes;
  $scope.CollectionOfNotes = StockFactory.getNoteCollection();

});	 	 