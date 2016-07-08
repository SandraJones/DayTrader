"use strict"

app.controller("NotesCtrl", function($scope, StockFactory){
  // $scope.CollectionOfNotes;
  $scope.delNote;
  $scope.CollectionOfNotes = StockFactory.getNoteCollection();
  $scope.newNote;
  $scope.selectedString;
  $scope.objectFromFirebase;
  $scope.singleNote;
  $scope.selectedStringFromNote;
  $scope.Notes;

  // $scope.notes=[];
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
    StockFactory.getSingleNote().then(function(response){
      console.log("responseFromGetSingleNote", reponse);
  //     $scope.singleNote = response;
  //     $scope.selectedStringFromNote = $scope.singleNote.filter(function(uid){
  //       return  $scope.selectedStringFromNote;
  //       $timeout();
  //       $location.path('/notes');
  //     } )
  //   });
  //   StockFactory.updateNote(Notes); 
  //   return $scope.objectFromFirebase;
    }); 	
};
});  

// REMOVE THIS
//  $scope.getSavedNotes = function(){
//         StockFactory.getNotes().then(function(Notes){
//           $scope.SavedNotes = Notes;
//           $scope.selectedItem = $scope.SavedNotes.filter(function(uid){
//             return $scope.selectedItem;
//             $timeout();
//             $location.path('/notes');
//           });
//         });
//       }; 

//       before trying something new:
//    $scope.editNote = function(Notes){
//     console.log(" editNote function Notes", Notes);
//     StockFactory.getSingleNote(Notes).then(function(response){
//     });
//     StockFactory.updateNote(Notes); 
//     return $scope.objectFromFirebase;
//   };
// });      