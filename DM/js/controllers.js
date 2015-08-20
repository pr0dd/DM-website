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
	$scope.counter = 3;
	$scope.articles = [
		{id:"art-01", topic: "Topic one!", date:"20.08.2015", showImg: true, showVid:false, thumb:"blogthumb-01.jpg", videoPath:"", poster:"", text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." },
		{id:"art-02", topic: "Topic two!", date:"21.08.2015", showImg: false, showVid:true, thumb:"", videoPath:"video/video-01.mp4", poster:"video/video-01.jpg", text:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable." },
		{id:"art-03", topic: "Topic three!", date:"22.08.2015", showImg: false, showVid:false, thumb:"", videoPath:"", poster:"", text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." }
	];

		$scope.slider = function(){
		//settings for slider
    var width = 100,
    		animationSpeed = 800,
    		pause = 3500,
    		currentSlide = 1;

    //cache DOM elements
    var slider = $('.slider'),
    		slideContainer = $('.move', slider),
    		slides = $('a', slider);

    //initialize interval
    var interval;
    
    //start function
    function startSlider() {
      interval = setInterval(function() {
        slideContainer.animate({'left': '-='+width+"%"}, animationSpeed, function() {
          if (++currentSlide === 3) {
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