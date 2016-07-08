app.controller("EditCtrl", function($scope, $location, $routeParams, StockFactory) {
	$scope.title = "Edit Item";
	$scope.submitButtonText = "Update";
	$scope.newNote = {};

	StockFactory.getSingleNote($routeParams.noteId)
	 	 .then(function successCallback(response){
	 	 	console.log("response", response);
		 $scope.newNote = response;


	})

	 $scope.addNewItem = function() {
	 	StockFactory.updateNote($routeParams.noteId, $scope.newNote)
	 		.then(function successCallback(response){
	 			$location.url("/edits");

	 		});
	 };



});