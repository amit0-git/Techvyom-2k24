window.onload = function () {
  // Display the page when page loads
  const webpage = document.getElementById("webpage");
  const loader = document.getElementById("loader");
  loader.style.display = "none";
  webpage.style.display = "block";


};


// responsive navbar

const mobilenavbar = document.getElementById("mobilenavbar")


// bg audio





function mobileNav() {

  if (mobilenavbar.style.display == "none") {
    mobilenavbar.style.display = "block";
    // document.body.style.overflow = "hidden";
  }
  else {
    mobilenavbar.style.display = "none";
    // document.body.style.overflow = "visible";
  }

}



const trusthead1 = document.getElementById("trusthead")
const trustdesc11 = document.getElementById("trustdesc")

const leftcard1 = document.getElementById("leftcard1")
const leftcard2 = document.getElementById("leftcard2")


const leftcard3 = document.getElementById("leftcard3")
const leftcard4 = document.getElementById("leftcard4")
const leftcard5 = document.getElementById("leftcard5")


const rightcard1 = document.getElementById("rightcard1")
const rightcard2 = document.getElementById("rightcard2")
const rightcard3 = document.getElementById("rightcard3")
const rightcard4 = document.getElementById("rightcard4")
const rightcard5 = document.getElementById("rightcard5")

const facultyhead1 = document.getElementById("facultyh1")

const devh1 = document.getElementById("developerh1")


const queryformwrap = document.getElementById("queryformwrap")


const faqwrap = document.getElementById("faq")

const navigationh11 = document.getElementById("navigationh1")
const navigationsection = document.getElementById("navigation")

const mapcont = document.getElementById("mapContainer")

//timer


const startin1 = document.getElementById("startin")
const timer1 = document.getElementById("timer")

// tyro

const tyrohead1 = document.getElementById("tyrohead")
const tyrodesc1 = document.getElementById("tyrodesc")
//developercardwrap
const developercont = document.getElementById("developercardwrap")

const options11 = {
  threshold: 0.4
}


var observer = new IntersectionObserver(callback, options11);

function callback(entries) {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      console.log(entry.target.id)

      if (entry.target.id == "trusthead") {
        entry.target.classList.add("fade-in")
      }
      if (entry.target.id == "trustdesc") {
        entry.target.classList.add("fade-in")
      }

      if (entry.target.id == "leftcard1" || entry.target.id == "leftcard2" || entry.target.id == "leftcard3" || entry.target.id == "leftcard4" || entry.target.id == "leftcard5") {
        entry.target.classList.add("fade-left")
      }


      if (entry.target.id == "rightcard1" || entry.target.id == "rightcard2" || entry.target.id == "rightcard3" || entry.target.id == "rightcard4" || entry.target.id == "rightcard5") {
        entry.target.classList.add("fade-right")

      }



      if (entry.target.id == "facultyh1") {
        entry.target.classList.add("fade-in")
      }

      if (entry.target.id == "developerh1") {
        entry.target.classList.add("fade-in")
      }

      if (entry.target.id == "developercardwrap") {
        entry.target.classList.add("fade-in")
      }

      if (entry.target.id == "navigationh1") {
        entry.target.classList.add("fade-in")
      }
      if (entry.target.id == "navigation") {
        entry.target.classList.add("fade-in")
      }

      if (entry.target.id == "tyrohead") {
        entry.target.classList.add("fade-in")
      }
      if (entry.target.id == "tyrodesc") {
        entry.target.classList.add("fade-in")
      }


      if (entry.target.id == "queryformwrap") {
        entry.target.classList.add("fade-in")
      }
      if (entry.target.id == "faq") {
        entry.target.classList.add("fade-in")
      }

      if (entry.target.id == "mapContainer") {
        entry.target.classList.add("fade-in")
      }

      if (entry.target.id == "startin") {
        entry.target.classList.add("fade-in")
      }

      if (entry.target.id == "timer") {
        entry.target.classList.add("fade-in")
      }




      observer.unobserve(entry.target);
    }


  })

}






window.addEventListener('load', () => {


  observer.observe(trusthead1);
  observer.observe(trustdesc11);

  observer.observe(leftcard1);
  observer.observe(leftcard2);

  observer.observe(leftcard3);
  observer.observe(leftcard4);
  observer.observe(leftcard5);

  observer.observe(rightcard1);
  observer.observe(rightcard2);
  observer.observe(rightcard3);
  observer.observe(rightcard4);
  observer.observe(rightcard5);

  observer.observe(facultyhead1);
  observer.observe(devh1);
  observer.observe(developercont);
  observer.observe(navigationh11);
  observer.observe(navigationsection);

  observer.observe(tyrohead1);
  observer.observe(tyrodesc1);

  observer.observe(faqwrap);
  observer.observe(queryformwrap);
  observer.observe(mapcont);
  observer.observe(startin1);
  observer.observe(timer1);






});








//display game only on desktop

const gamenav = document.getElementsByClassName("gamenav");

const mobilegame = document.getElementsByClassName("mobilegame");

Array.from(gamenav).forEach((element) => {
  if (window.innerWidth >= 850) {

    console.log("Hide Game Icon");
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
});




function loadDate() {

  anime({
    targets: '#date',
    opacity: 1,

    easing: 'cubicBezier(0.42, 0, 0.58, 1)',
    duration: 2000,
    delay: 6000
  });

}
function loadDescText(top1) {
  anime({
    targets: '#desc',
    top: top1,
    opacity: 1,

    easing: 'cubicBezier(0.42, 0, 0.58, 1)',
    duration: 3000,
    delay: 4000
  });

}



function loadMainText(top1, delay) {
  anime({
    targets: '#hometext',
    top: top1,

    easing: 'cubicBezier(0.42, 0, 0.58, 1)',
    duration: 2000,
    delay: delay
  });

}







function loadEarth(num, width) {
  const earth = document.querySelector('#earth');
  anime({
    targets: '#earth',
    width: width,
    bottom: num, // Center of the screen vertically
    easing: 'cubicBezier(0.42, 0, 0.58, 1)',
    duration: 2000,// Duration of the animation in milliseconds

  });



}



if (window.innerWidth >= 320 && window.innerWidth <= 480) {

  console.log("mobile animation")
  // loadEarth("-1100px")
  loadEarth("-240px", "600px")
  loadDescText("180px")
  loadMainText("90px", 6000)
  loadDate()


}


else {

  //for desktop
  console.log("desktop animation")
  loadEarth("-1100px", "1500px")
  loadDescText("190px")
  loadMainText("60px", 5000)
  loadDate()

}





window.addEventListener('scroll', function () {

  //move earth up when scrolling down

  const earth = document.getElementById('earth');
  const scrolled = window.scrollY;
 

  if (window.scrollY == 0) {
    //move earth to original position when we reach top of page
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      loadEarth("-240px", "600px")
    }

    else {

      loadEarth("-1100px", "1500px")
    }

  }



  earth.style.bottom = `${scrolled * 0.5}px`; // Adjust the multiplier for desired parallax effect
});






// --------------------------------timer section----------------
// Set the date we're counting down to
var countDownDate = new Date("May 4, 2024 08:00:00").getTime();

var dayout = document.getElementById("day")
var hourout = document.getElementById("hour")
var minout = document.getElementById("min")
var secout = document.getElementById("sec")

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);



  dayout.innerHTML = days;
  hourout.innerHTML = hours;
  minout.innerHTML = minutes;
  secout.innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    dayout.innerHTML = 0;
    hourout.innerHTML = 0;
    minout.innerHTML = 0;
    secout.innerHTML = 0;

  }
}, 1000);







