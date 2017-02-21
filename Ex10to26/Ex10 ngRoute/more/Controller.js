var app = angular.module('myApp',['ngRoute']);   // as we use a another module in angular we need to tell in array that we use dependency

app.config(function($routeProvider){   // config is a method which will work with anomous function which we will provide
	//$routeProvider is privided by ngRoute
	$routeProvider
	.when('/',{ //when user is here / then bellow templateUrl execute
	templateUrl:"home.html"  // templateUrl basically use because we need to put more data to show . so here we can't do which will look mess
	})
	.when('/anotherPage',{  //when user is here /anotherPage then bellow templateUrl execute
	templateUrl: 'hello.html'
	})
	.otherwise({    //  first one home page
	redirectTo:'/'
	})
});

