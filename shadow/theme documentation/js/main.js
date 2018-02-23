(function ($) {
	
    "use strict"
    
    $('.switch-btn').click(function() {
    	$("#doc-menu").toggleClass("go-left");
    	$(".main-section").toggleClass("active");
    	$(".switch-bar").toggleClass("active");
    	$(this).toggleClass("active");
    })

	
})(jQuery); //end