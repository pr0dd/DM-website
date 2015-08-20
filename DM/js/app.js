var app = angular.module("app", [
	"ngRoute", 
	"ngAnimate", 
	"appDirs", 
	"appCtrls"
]);

app.config(["$routeProvider", function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "partials/home.html",
			controller: "homeCtrl"
		})
		.when("/services", {
			templateUrl: "partials/services.html",
			controller: "servicesCtrl"
		})
		.when("/work", {
			templateUrl: "partials/work.html",
			controller: "workCtrl"
		})
		.when("/about", {
			templateUrl: "partials/about.html",
			controller: "aboutCtrl"
		})
		.when("/contacts", {
			templateUrl: "partials/contacts.html",
			controller: "contactsCtrl"
		})
		.when("/blog", {
			templateUrl: "partials/blog.html",
			controller: "blogCtrl"
		})
		.otherwise({
			redirectTo: "/"
		});
}]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
