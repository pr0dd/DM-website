var app = angular.module("app", [
	"ui.router", 
	"ngAnimate", 
	"appDirs", 
	"appCtrls"
]);

app.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("/", {
			url: "/",
			templateUrl: "partials/home.html",
			controller: "homeCtrl"
		})
		.state("services", {
			url: "/services",
			templateUrl: "partials/services.html",
			controller: "servicesCtrl"
		})
		.state("work", {
			url: "/work",
			templateUrl: "partials/work.html",
			controller: "workCtrl"
		})
		.state("about", {
			url: "/about",
			templateUrl: "partials/about.html",
			controller: "aboutCtrl"
		})
		.state("contacts", {
			url: "/contacts",
			templateUrl: "partials/contacts.html",
			controller: "contactsCtrl"
		})
		.state("blog", {
			url: "/blog",
			templateUrl: "partials/blog.html",
			controller: "blogCtrl"
		})
		.state("post-01", {
			url: "/post-01",
			templateUrl: "partials/post-01.html",
			controller: "blogCtrl"
		})
		.state("post-02", {
			url: "/post-02",
			templateUrl: "partials/post-02.html",
			controller: "blogCtrl"
		})
		.state("post-03", {
			url: "/post-03",
			templateUrl: "partials/post-03.html",
			controller: "blogCtrl"
		});

}]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
