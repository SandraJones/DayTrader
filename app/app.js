"use strict";

var app = angular.module("DayTrader", ["ngRoute"])
  .constant("firebaseURL", "https://sjdaytrader.firebaseio.com/");

app.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/login'
		})










})  

