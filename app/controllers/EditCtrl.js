app.controller("EditCtrl", function($scope, $location, $routeParams, StockFactory) {
  StockFactory.getSingleNote($routeParams.noteId)
    .then(function successCallback(response){
       $scope.newNote = response;
  });

  $scope.editNote = function() {
    StockFactory.updateNote($routeParams.noteId, $scope.newNote)
    .then(function successCallback(response){
       $location.url("/notes");
    });
  };
});