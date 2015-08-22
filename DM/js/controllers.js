var appCtrls = angular.module("appCtrls", []);

appCtrls.controller("indexCtrl", ["$scope", "$timeout", function($scope,$timeout){
	//Adjust section's height during animation:
	$scope.onViewLoad = function(){
		var section = $("section");
		section.css({minHeight:1300});
		$timeout(function(){	
			section.animate({minHeight:0},1000);
		},950);
	}
}]);

appCtrls.controller("homeCtrl", ["$scope", "$rootScope", "$interval", function($scope, $rootScope, $interval){
//SLIDER:
	$scope.slider = function(){
		//setting variables:
    var width = 100,
    		animationSpeed = 800,
    		pause = 3500,
    		currentSlide = 1;

    //cache DOM elements:
    var slider = $('.slider'),
    		slideContainer = $('.move', slider),
    		slides = $('img', slider);

    //initialize interval:
    var interval;

    //define main function:
    function startSlider() {
      interval = $interval(function() {
        slideContainer.animate({'left': '-='+width+"%"}, animationSpeed, function() {
          if (++currentSlide === slides.length) {
            currentSlide = 1;
            slideContainer.css('left', 0+"%");
          }
        });
      }, pause);
    }
    
    //pause function:
    function pauseSlider() {
      $interval.cancel(interval);
    }
    
    //set event handlers:
    slideContainer
      .on('mouseenter', pauseSlider)
      .on('mouseleave', startSlider);

    //first start:
    startSlider();
	}
	//run Slider:
	$scope.slider();

}]);

appCtrls.controller("servicesCtrl", ["$scope", function($scope){
	//unused controller...
	$scope.foo = "services-foo"; 
}]);

appCtrls.controller("workCtrl", ["$scope",  "$location", "$anchorScroll", function($scope, $location, $anchorScroll){

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
	//unused controller
	$scope.foo = "about-foo";
}]);

appCtrls.controller("contactsCtrl", ["$scope", function($scope){
	//unused controller
	$scope.foo = "contacts-foo";
}]);

appCtrls.controller("blogCtrl", ["$scope", function($scope){

	$scope.counter = 3;
	$scope.articles = [
		{id:"post-01", topic: "Modern innovations", date:"20.08.2015", showImg: true, showVid:false, thumb:"blogthumb-01.jpg", full:"blog-1.jpg", videoPath:"", poster:"", text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." },
		{id:"post-02", topic: "Courage", date:"21.08.2015", showImg: false, showVid:true, thumb:"", full:"", videoPath:"video/video-01.mp4", poster:"video/video-01.jpg", text:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable." },
		{id:"post-03", topic: "Live today", date:"22.08.2015", showImg: false, showVid:false, thumb:"", full:"", videoPath:"", poster:"", text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." }
	];

}]);