"use strict"

app.controller("NotesCtrl", function($scope, StockFactory){
  
  // $scope.Notes;

  //if Notes contains a string then add to the array 
				//and print to the DOM 



  // var getUserNotes = function () {   
  $scope.Notes = StockFactory.getNotes();


    // return $scope.Notes;
// };
});	 	 