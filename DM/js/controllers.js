var appCtrls = angular.module("appCtrls", []);

appCtrls.controller("homeCtrl", ["$scope", function($scope){
	$scope.foo = "home-foo";
	$scope.slider = function(){
		//settings for slider
    var width = 100,
    		animationSpeed = 800,
    		pause = 3500,
    		currentSlide = 1;

    //cache DOM elements
    var slider = $('.slider'),
    		slideContainer = $('.move', slider),
    		slides = $('img', slider);

    //initialize interval
    var interval;
    
    //start function
    function startSlider() {
      interval = setInterval(function() {
        slideContainer.animate({'left': '-='+width+"%"}, animationSpeed, function() {
          if (++currentSlide === slides.length) {
            currentSlide = 1;
            slideContainer.css('left', 0+"%");
          }
        });
      }, pause);
    }
    
    //pause function
    function pauseSlider() {
      clearInterval(interval);
    }
    
    //set event handlers
    slideContainer
      .on('mouseenter', pauseSlider)
      .on('mouseleave', startSlider);

    startSlider();
	}
	$scope.slider();

}]);

appCtrls.controller("servicesCtrl", ["$scope", function($scope){
	$scope.foo = "services-foo";
}]);

appCtrls.controller("workCtrl", ["$scope", function($scope){
	$scope.foo = "work-foo";
	$scope.counter = 9;
	$scope.linkVisible = true;

	$scope.images = [
		{id:"work-1"},
		{id:"work-2"},
		{id:"work-3"},
		{id:"work-4"},
		{id:"work-5"},
		{id:"work-6"},
		{id:"work-7"},
		{id:"work-8"},
		{id:"work-9"},
		{id:"work-10"},
		{id:"work-11"},
		{id:"work-12"}
	];
	$scope.showMore = function(){
		$scope.counter = "";
		$scope.linkVisible = false;
	}
	$scope.myFunc = function(){
		//alert("me good!");
		var images = $(".image-wrapper");
		console.log(images);
	}
	$scope.myFunc();

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