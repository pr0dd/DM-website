var appCtrls = angular.module("appCtrls", []);

// appCtrls.controller("topmenu", ["$scope", function($scope){
// 	$scope.load = function(){
// 		var button = $("button.pop"),
// 				hiddenList = button.next("ul");
// 		button.on("click", function(){
// 			hiddenList.fadeToggle();
// 		});
// 	},
// 	$scope.load();
// }]);

appCtrls.controller("homeCtrl", ["$scope", function($scope){
	$scope.foo = "home-foo";
}]);

appCtrls.controller("servicesCtrl", ["$scope", function($scope){
	$scope.foo = "services-foo";
}]);

appCtrls.controller("workCtrl", ["$scope", function($scope){
	$scope.foo = "work-foo";
}]);

appCtrls.controller("aboutCtrl", ["$scope", function($scope){
	$scope.foo = "about-foo";
}]);

appCtrls.controller("contactsCtrl", ["$scope", function($scope){
	$scope.foo = "contacts-foo";
}]);

appCtrls.controller("blogCtrl", ["$scope", function($scope){
	$scope.foo = "blog-foo";
}]);