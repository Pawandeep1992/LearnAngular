var app = angular.module('myApp',['ngRoute']);   // as we use a another module in angular we need to tell in array that we use dependency

app.config(function($routeProvider){   // config is a method which will work with anomous function which we will provide
	$routeProvider
	.when('/',{ //when user is here / then bellow template execute
	template:"Welcome to the User"
	})
	.when('/anotherPage',{  //when user is here /anotherPage then bellow template execute
	template:"Welcome to the User again"
	})
	.otherwise({    //  first one home page
	redirectTo:'/'
	})
});

