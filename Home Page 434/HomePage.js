/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} */
/*eslint-env browser*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 
function addZero(n) {
    if(n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}
function getDate() {
    var n, d, hours, minutes, seconds, timeOfDay, day, month, dateSuffix;
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var suffix = ['st', 'nd', 'rd', 'th'];
    n =  new Date();
    day = days[n.getDay()];
    month = months[n.getMonth()];
    d = n.getDate();
    if(d % 10 == 1) {
        dateSuffix = suffix[0];
    } else if(d % 10 == 2) {
        dateSuffix = suffix[1];
    } else if(d % 10 == 3) {
        dateSuffix = suffix[2];
    } else {
        dateSuffix = suffix[3];
    }
    hours = n.getHours() % 12;
    if(n.getHours() > 12) {
        timeOfDay = "PM";
    } else {
        timeOfDay = "AM";
    }
    minutes = addZero(n.getMinutes());
    seconds = addZero(n.getSeconds());
    document.getElementById("date").innerHTML = "<center>" + hours + ":" + minutes + ":" 
    + seconds + " " + timeOfDay + "</center>" + "<center>" + day + " - " + month + " " + d + dateSuffix + "</center>";
    setTimeout(getDate, 1000);
}
getDate();