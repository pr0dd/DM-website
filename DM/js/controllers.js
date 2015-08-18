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