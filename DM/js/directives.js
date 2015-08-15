var appDirs = angular.module("appDirs", []);

appDirs.directive("pop", function() {
	return {
		link: function(scope,element,attrs){
						//initialize variables:
						var hiddenList = $(element).next("ul"),
								icon = $(element).find("i");
						//set event handlers:
						$(element).on("click", function(){
							hiddenList.fadeToggle();
							if(icon.text() == "expand_more") icon.text("expand_less");
							else icon.text("expand_more");
						});
					}
	}
});

appDirs.directive("menuBtn", function() {
	return {
		link: function(scope,element,attrs){
						//initialize variables:
						var btn = $(".logo button"),
								tm = $(".topmenu"),
								win = $(window),
								doc = $(document);
						//set event handlers:
						btn.on("click", function(){
							tm.slideToggle();
						});
						win.on("resize", function(){
							if(doc.width()>600) tm.slideDown();
						});
					}
	}
});