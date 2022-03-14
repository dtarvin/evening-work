$(function(){
    $("nav>a").mouseenter(function(){
      var atag = $(this);
      $(".paw").fadeIn(250);
      var left = atag.position().left;
      var tagWidth = atag.width();
      var pawWidth = $(".paw").width();
      var middle = left + (tagWidth/2) - (pawWidth/2);
      $(".paw").css("left", middle + "px");
    });
    
    $("nav").mouseleave(function(){
      $(".paw").fadeOut(250);
    });
    
    $("#schedule-link").click(function() {
         $("#schedule").fadeIn(250);
// 	  var href = $(this).attr("href");
//         $(href).toggle(500);
    });
    $(".popup").on("click",".close",function() {
			$(this).parent().fadeout(250);
    });

	
    $("#contact-link").click(function() {
	        var href = $(this).attr("href");
	    $(href).toggle(500);
	});
    $(".popup").on("click",".close",function() {
	        $(this).parent().toggle(500);
	    });
    $("#contact-link").on("click", ".close", function(){
	        $(".popup").addClass("click");
    });    
        
});


