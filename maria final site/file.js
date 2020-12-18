// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
    for (var i = 0; i < imageSlides.length; i++) {
        imageSlides[i].classList.remove('visible');
    }
}

// REMOVE ALL DOTS FUNCTION
function removeDots() {
    for (var i = 0; i < imageSlides.length; i++) {
        circles[i].classList.remove('dot');
    }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
    var currentImage = imageSlides[counter];
    var currentDot = circles[counter];
    currentImage.classList.add('visible');
    removeDots();
    currentDot.classList.add('dot');
    counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
    var target = e.target;
    if (target == leftArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        removeDots();
        if (counter == 1) {
            counter = (imageSlides.length - 1);
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
            counter--;
            counter--;
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        }
    } else if (target == rightArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        removeDots();
        if (counter == imageSlides.length) {
            counter = 0;
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        }
    }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
function slideshow() {
    if (counter < imageSlides.length) {
        imageLoop();
    } else {
        counter = 0;
        hideImages();
        imageLoop();
    }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 10000);



//notice board starts here
var ppl = ["Hello world i'm fine how are you.", "Another notification for school", "admission starts.", "Online class starts.", "From jan school will reopen.", "Students Instructions for COVID-19.", "Face-masks is mandatory.", "Hand sanitizers and hand wash is mandatory.", "Online exams ", "Admission started",];

// select elements
var scrollTable = document.querySelector("#scrolling-table");
var scrollWrapper = document.querySelector("#scrolling-wrapper");

// insert data into table
for(var i = 0; i < 10; i++) {
	var row = scrollTable.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2)
	var cell4 = row.insertCell(3);
	cell1.textContent = ppl[i];
	

	
}

// repeat the table content to ensure the infinite scrolling effect
scrollTable.innerHTML += scrollTable.innerHTML;

// scrolling function
function scrolling() {
	/* when the table has been scrolled half way or more than half
	way up, we manually "scroll it back" half of the table height,
	so that the contents that are displaying in the wrapper will
	stay "same" since have already duplicated all contents.
	*/
	if (scrollWrapper.scrollTop >= 0.5 * scrollTable.scrollHeight) {
		scrollWrapper.scrollTop -= 0.5 * scrollTable.scrollHeight;
	} else {
		// otherwise, just scroll the table up little bit
		scrollWrapper.scrollTop++;
	}
}

// set timer for scrolling (larger number will make scrolling slower)
let timer = setInterval(scrolling, 30);
// when mouseover, stop scrolling
scrollWrapper.addEventListener('mouseover', () => clearInterval(timer), false);
// when mouseout, continue scrolling
scrollWrapper.addEventListener('mouseout', () => {timer = setInterval(scrolling, 20)}, false);