"use strict"

app.controller("ListFaveCtrl", function($scope, StockFactory){
   
$scope.listFaves = StockFactory.getCollection();

});	 	 