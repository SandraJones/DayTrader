"use strict";

var app = angular.module("DayTrader", ["ngRoute"])
  .constant("firebaseURL", "https://sjdaytrader.firebaseio.com/");

app.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/login',
			controllers: 'LoginCtrl.js'
		}).
    	otherwise('/',{
    	templateUrl: 'partials/login',
			controllers: 'LoginCtrl.js'	
    });
   
     app.run(($location) =>{
  	 let addressRef = new Firebase("https://sjdaytrader.firebaseio.com/");

  	 addressRef.unauth();

    //When Registering:
  	addressRef.onAuth(authData =>{
   	 if(!authData){
       $location.path("/login");
     }
    })	
  });

});