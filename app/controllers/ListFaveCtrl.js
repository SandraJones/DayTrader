"use strict"

app.controller("ListFaveCtrl", function($scope, StockFactory){
   
	$scope.listFaves = StockFactory.getCollection();

	$scope.delFave = function(Fave){
	  StockFactory.deleteFave
	  (Fave).then(function(response){
	  	StockFactory.getFaves().then(function(FaveCollection){
	  		$scope.listFaves = FaveCollection;
	  		});
	  });
	};
});	 	 