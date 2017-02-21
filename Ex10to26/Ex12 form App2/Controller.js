var app = angular.module('myApp',['ngRoute']);   // as we use a another module in angular we need to tell in array that we use dependency

app.config(function($routeProvider){   // config is a method which will work with anomous function which we will provide
	//$routeProvider is privided by ngRoute
	$routeProvider
	.when('/',{ //when user is here / then bellow templateUrl execute
	templateUrl:"login.html"  // templateUrl basically use because we need to put more data to show . so here we can't do which will look mess
	})
	.when('/anotherPage',{  //when user is here /anotherPage then bellow templateUrl execute if form pass and name true
		resolve: {
			"check": function($location,$rootScope){
				if(!rootScope.loggedIn){
					$location.path('/');
				}
			}
		},
	templateUrl: 'home.html'
	})
	.otherwise({    //  first one home page
	redirectTo:'/'
	})
});

app.controller('logctrl',function($scope,$location,$rootScope){
	$scope.submit = function(){
		if($scope.username == 'admin' && $scope.userpassword =='admin'){
			$rootScope.loggedIn=true;
			$location.path('/anotherPage');
		}
		else{
			alert("invalid name or pass");
		}
	}
});

