var slides = document.querySelectorAll('#container-slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

//function init() {
//    var div = document.getElementById("scrollEvents");
//
//    // increase the scroll position by 10 px every 10th of a second
//    var original = div.scrollTop; //save the original position
//    setInterval(function () {
//        // make sure it's not at the bottom
//        if (div.scrollTop < div.scrollHeight - div.clientHeight)
//            div.scrollTop += 217; // move down one image
//        else //if it's at the bottom
//            div.scrollTop = original; //reset to the orignal height
//    }, 4000); // 3 second intervals between change
//}
//window.onload = init();
