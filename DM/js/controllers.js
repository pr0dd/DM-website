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

appCtrls.controller("workCtrl", ["$scope",  "$location", "$anchorScroll", function($scope, $location, $anchorScroll){
	$scope.foo = "work-foo";
	$scope.counter = 9;
	$scope.linkVisible = true;

	$scope.images = [
		{thumb:"work-1-thumb.jpg", full:"work-1.jpg", header:"Image 1", description:"Descr.1"},
		{thumb:"work-2-thumb.jpg", full:"work-2.jpg", header:"Image 2", description:"Descr.2"},
		{thumb:"work-3-thumb.jpg", full:"work-3.jpg", header:"Image 3", description:"Descr.3"},
		{thumb:"work-4-thumb.jpg", full:"work-4.jpg", header:"Image 4", description:"Descr.4"},
		{thumb:"work-5-thumb.jpg", full:"work-5.jpg", header:"Image 5", description:"Descr.5"},
		{thumb:"work-6-thumb.jpg", full:"work-6.jpg", header:"Image 6", description:"Descr.6"},
		{thumb:"work-7-thumb.jpg", full:"work-7.jpg", header:"Image 7", description:"Descr.7"},
		{thumb:"work-8-thumb.jpg", full:"work-8.jpg", header:"Image 8", description:"Descr.8"},
		{thumb:"work-9-thumb.jpg", full:"work-9.jpg", header:"Image 9", description:"Descr.9"},
		{thumb:"work-10-thumb.jpg", full:"work-10.jpg", header:"Image 10", description:"Descr.10"},
		{thumb:"work-11-thumb.jpg", full:"work-11.jpg", header:"Image 11", description:"Descr.11"},
		{thumb:"work-12-thumb.jpg", full:"work-12.jpg", header:"Image 12", description:"Descr.12"}
	];
	$scope.showMore = function(){
		$scope.counter = "";
		$scope.linkVisible = false;
	};
	
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