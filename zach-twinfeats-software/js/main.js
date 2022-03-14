$(function() {
        //select all nav links and respond to their click
        $("nav > a").click(function() {
            //the code that will execute when a nav link is clicked
            /*
            $(this) means which element was clicked from above, in
            our case which link was clicked. We use the jQuery
            function attr to get the indicated attribute
            */
           var target = $(this).attr("href");
           /*
           Find the current element with the show class, then
           remove that class so that it hides
           */
            $(".show").removeClass("show");
            /*
            Take the target page we captured above and add
            the show class so that it slides into view
            */
           $(target).addClass("show");
        });
});