"use strict";

var app = angular.module("DayTrader", ["ngRoute"])
  .constant("firebaseURL", "https://sjdaytrader.firebaseio.com/")

    let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
      if(AuthFactory.isAuthenticated()){
        console.log("User is authenticated, resolve route promise");
        resolve();
      } else {
        console.log("User is not authenticated, reject route promise");
        reject();
      }
    })

    app.directive('errSrc', function() {
      return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src !== attrs.errSrc) {
              attrs.$set('src', attrs.errSrc);
            }
          });
        }
      };
    });

    app.config(function($routeProvider){
    	$routeProvider.
    		when('/list', {
          templateUrl: './partials/nav.html',
          controller: 'ListCtrl',
          resolve: {isAuth}
        }).
        when('/logout', {
          templateUrl: './partials/login.html',
          controller: 'LoginCtrl'
        }).  
        when('/search', {
          templateUrl: './partials/search.html',
          controller: 'SearchCtrl',
          resolve: {isAuth}
        }).
        otherwise('/', {
          templateUrl: './partials/login.html',
          controller: 'LoginCtrl'
          });
    });
       
    app.run(($location, firebase) =>{
	  let addressRef = new Firebase("https://sjdaytrader.firebaseio.com/");

	  addressRef.unauth();

    //When Registering:
	  addressRef.onAuth(authData =>{
 	    if(!authData){
        $location.path("/login");
       }
    })	
    });

