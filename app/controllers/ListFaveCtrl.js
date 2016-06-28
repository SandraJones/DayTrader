"use strict"
app.controller('ListFaveCtrl', ["$scope", "$location", "StockFactory",  "AuthFactory",
	 function($scope, $location, StockFactory, AuthFactory){
	 	console.log("ListFaveCtrl loaded");
	
	// $scope.outputFavArray =[]; 	
	$scope.getFaves;
	$scope.Faves;

//need to slow down this process
	 	$scope.getFaves = function(){
	 	 // 		var uid = AuthFactory.getUser();	
				// var ref = new Firebase(firebaseURL + "Favorites" );
				// ref.orderByChild("uid").equalTo(uid).on("value", function(snapshot) {
	  	// 	console.log(snapshot.val());
	  	// 	var obj = snapshot.val();
	  	// 	for (var prop in obj) {

				// 	  console.log("obj." + prop + " = " + obj[prop]);
				// 	  $scope.outputFavArray.push(obj[prop]);

				// 	};
				// 	console.log($scope.outputFavArray);

			StockFactory.getFavorites();
		};
}]);