"use strict"
app.controller('SearchCtrl', ["$scope", "$location", "StockFactory",
	 function($scope, $location, StockFactory){
	 	$scope.getAStock;
	 	$scope.getKeys;
	 	$scope.stockObj = {
	 		Name: "",
	 		Dates: {}
	 	};


	 	$scope.searchAStock = function(){
	 		console.log("getAStockFunctionLoaded");
	 		StockFactory.getStocks($scope.getAStock).then(function(stockReturn){
	 			$scope.stock = stockReturn.dataset;
	 			$scope.stockObj.Name = stockReturn.dataset.name; 
	 			$scope.getAStock = "";
	 			console.log("$scope.stock", $scope.stock);
	 			pullValueFromArrayInArrayInObject($scope.stock.data);	
	 		});
	 	}

//$SCOPE.STOCK.OBJECT.ARRAY.ARRAY.KEY.VALUE
	 var pullValueFromArrayInArrayInObject = function(dailyPriceData){
	 	 		for (var i=0; i<dailyPriceData.length; i++) {
	 	 			var dayInfo = dailyPriceData[i][0];
	 	 			$scope.stockObj.Dates = {
	 	 				 date: {
	 	 					Close: "",
	 	 					Open: "",
	 	 					High: "",
	 	 					Low: "",
	 	 					Volume: ""
	 	 				}
	 	 			}; 
	 	 		}
	 			console.log("$scope.stockObj", $scope.stockObj);


	 	 };
	 	// 	var= obj;
	 	// 	var= arrayInObj
	 	// 	var = returnedValueInArray;
	 	// 	var = returnedCoreValueInObject;
	 	// 	var obj = {data:name, data:open, data:close, data:volume, data:high, data:low, data:volume}
	 		//for (var key in data){
	 		//for (var $scope.stock.data.[1].close[4]name in StockFactory.stockData) {
	 				//display $stock.data.name
	 				//then display the words "Close" then the $stock.data.close
			//Six values each need to be returned per date for arrays 0,1,2

			// want to display:
						// "Date = " + date value[0].[0]  would it be a filter([0]) of some sort?
						// "Close = " + close value[0].[4]
	 					// "Open = " +  data. [0].[1]
	 					// "High =  " +   data.  [0].[2]
	 					// "Low = " + data. [0].[3]
	 					// "Volume = " + data. [0].[5]

	 					// Date = date value[1].[0]
						// Close=close value[1].[4]
	 					// open value= is [1].[1]
	 					// High = [1].[2]
	 					// Low = [1].[3]
	 					// Volume = [1].[5] 

	 					// Date = date value[2].[0]
						// Close=close value[2].[4]
	 					// open value= is [2].[1]
	 					// High = [2].[2]
	 					// Low = [2].[3]
	 					// Volume = [2].[5]


	 	
	 		// 		if( obj.hasOwnProperty(prop)) {
	 	// 		};
	 	// 	};
	 	// };
	 // };
}]);