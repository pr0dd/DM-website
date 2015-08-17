﻿$(function(){
	//SLIDER
	function slider(){
		//settings for slider
    var width = 100,
    		animationSpeed = 800,
    		pause = 4500,
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
    
    //show caption on hover
  	function showCap(){
			var images = $(".move img"),
					cap = $(".slider .capture");
			images
				.on("mouseenter", function(){
					var attrText = $(this).attr("data-cap");
					cap.text(attrText).slideDown();
				})
				.on("mouseleave", function(){
					cap.slideUp();
				});
		}
		showCap();
    startSlider();
	}
	//slider();
});
