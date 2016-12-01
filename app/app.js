var app = angular.module("DayTrader", ["ngRoute", "firebase"])
  .constant("firebaseURL", "https://sjdaytrader.firebaseio.com/")
  

  let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
    if(AuthFactory.isAuthenticated()){
      resolve();
    } else {
      reject();
      }
  })

    
   app.config(function($routeProvider){
    $routeProvider.
      when('/login', {
        templateUrl: './partials/login.html',
        controller: 'LoginCtrl'
      }).  
      when('/nav', {
        templateUrl: './partials/nav.html',
        controller: 'NavCtrl',
        resolve: {isAuth}
      }).
      when('/logout', {
        templateUrl: './partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/favorites/:uid', {
        templateUrl: './partials/search.html',
        controller: 'SearchCtrl',
        resolve: {isAuth}
      }). 
      when('/notes/:noteId', {
        templateUrl: './partials/edit.html',
        controller: 'EditCtrl',
        resolve: {isAuth}
      }).
      when('/search', {
        templateUrl: './partials/search.html',
        controller: 'SearchCtrl',
        resolve: {isAuth}
      }).
      when('/notes', {
        templateUrl: './partials/notes.html',
        controller: 'NotesCtrl',
        resolve: {isAuth}  
      }).
      when('/list', {
        templateUrl: './partials/listFave.html',
        controller: 'ListFaveCtrl',
        resolve: {isAuth}
      }).  
      otherwise('/login', {
        templateUrl: './partials/login.html',
        controller: 'LoginCtrl'
      });
  });