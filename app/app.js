var app = angular.module("DayTrader", ["ngRoute", "firebase"])
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

    
    app.config(function($routeProvider){
    	$routeProvider.
        when('/login', {
          templateUrl: './partials/login.html',
          controller: 'LoginCtrl'
        }).  
        // when('/list', {
      //     templateUrl: './partials/nav.html',
      //     controller: 'ListCtrl',
      //     resolve: {isAuth}
      //   })
        when('/logout', {
          templateUrl: './partials/login.html',
          controller: 'LoginCtrl'
        }).  
        when('/', {
          templateUrl: './partials/login.html',
          controller: 'LoginCtrl'
        }).
        when('/search', {
          templateUrl: './partials/search.html',
          controller: 'SearchCtrl',
          resolve: {isAuth}
        }).  
        // when('/favorites', {
        //   templateUrl: './partials/listFave.html',
        //   controller: 'ListCtrl',
        //   resolve: {isAuth}
        // }).
        otherwise('/');
    });
       
   //  app.run(($location, firebase, "https://sjdaytrader.firebaseio.com/") =>{
	  // let someRef = new Firebase("https://sjdaytrader.firebaseio.com/");

	  // someRef.unauth();

   //  //When Registering:
	  // addressRef.onAuth(authData =>{
 	 //    if(!authData){
   //      $location.path("/login");
   //     }
   //  })	
   //  });

