function simpleSlider(element = '#simple-slider', auto = false, pause) {

    //Get parent element
    var $this = $(element);

    //Slides container
    var slidesCont = $this.children('.slides-container');
    //Get all slides 
    var slides = slidesCont.children('.slide');

    //Get pager div
    var pager = $this.children('.pager');

    //Get previous / Next Links
    var arrowsCont = $this.children('.arrows');
    var prevSlide = arrowsCont.children('.prev');
    var nextSlide = arrowsCont.children('.next');

    //Total Slides Count
    var slidesCount = slides.length;

    //Set currentSlide to first child
    var currentSlide = slides.first();
    var currentSlideIndex = 1;

    var autoPlay = null;

    //Hide all slides except first and add active class to first 
    slides.not(':first').css('display', 'none');
    currentSlide.addClass('active');

    //Function Responsible for Fading to Next Slide
    function fadeNext() {
        currentSlide.removeClass('active').fadeOut(700);

        if (currentSlideIndex == slidesCount) {
            currentSlide = slides.first();
            currentSlide.delay(500).addClass('active').fadeIn(700);
            currentSlideIndex = 1;
        } else {
            currentSlideIndex++;
            currentSlide = currentSlide.next();
            currentSlide.delay(500).addClass('active').fadeIn(700);
        }

        pager.text(currentSlideIndex + ' / ' + slidesCount);
    }
    //Funtion responsible to fading to previous slide
    function fadePrev() {
        currentSlide.removeClass('active').fadeOut(700);

        if (currentSlideIndex == 1) {
            currentSlide = slides.last();
            currentSlide.delay(500).addClass('active').fadeIn();
            currentSlideIndex = slidesCount;
        } else {
            currentSlideIndex--;
            currentSlide = currentSlide.prev();
            currentSlide.delay(500).addClass('active').fadeIn(700);
        }
        pager.text(currentSlideIndex + ' / ' + slidesCount);
    }

    //function that starts autoplay  and resets it incase user navigated (clciked prev or next)
    function AutoPlay() {
        clearInterval(autoPlay);

        if (auto == true)
            autoPlay = setInterval(function() {fadeNext() }, pause);
    }

    //detect if user cliked on arrow for next slide nd fade next slide if did
    $(nextSlide).click(function(e) {
        e.preventDefault();
        fadeNext();
        AutoPlay();
    });

    //detect if user cliked on arrow for previous slide and fade prev slide if did
    $(prevSlide).click(function(e) {
        e.preventDefault();
        fadePrev();
        AutoPlay();
    });
    //Start auto if auto set to true
    AutoPlay();


}
$(function() {
    simpleSlider('#slider', true, 8000);
});