var app = angular.module('myApp',[]);  



app.controller('people',function($scope,$http){
		
	$http.get('http://192.168.0.101:8000/database.json')
	//http://192.168.0.101:8000/
//'http://localhost/Ex13httprequest/database.json'
	.success(function(response){
	$scope.persons = response.records;	
	});
});

