$(document).ready(function () {
    $("#contact").click(function() {
       $("#contact-popup").addClass("show-contact"); 
       return false;
    });
    
	$("#contact-popup > .close").click(function () {
		$(this).parent().removeClass("show-contact");
	});

	$("#schedule-popup > .close").click(function () {
		$(this).parent().fadeOut(250);
	});

	$("#schedule").click(function () {
		$("#schedule-popup").fadeIn(250);
		return false;
	});
	
	/*
	The pawprint code. First, handle the mouseenter (when the mouse pointer
	enters the box of an a tag).
	*/
	$("nav > a").mouseenter(function () {
		//Remember which a tag this is
		var atag = $(this);
		/*
		fade the pawprint in, and the function on the end is called when
		the fade in is complete
		*/
		$("#pawprint").fadeIn(250, function () {
			//get the left side of the a tag, relative to the nav tag
			var left = atag.position().left;
			//get the width of the atag
			var width = atag.width();
			//get the width of the pawprint
			var pawWidth = $("#pawprint").width();
			/*
			calculate the middle of the a tag: left + width / 2
			then subtract half the width of the pawprint to figure out
			where the left side of the pawprint needs to be in order
			to align it under the center of the a tag
			*/
			var middle = left + width / 2 - pawWidth/2;
			//move the paw print
			$("#pawprint").css("left", middle + "px");
		});
	});

	$("nav").mouseleave(function () {
		$("#pawprint").fadeOut(250);
	});

});

