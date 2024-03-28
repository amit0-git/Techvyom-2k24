window.addEventListener('load', () => {
  const earth = document.querySelector('#earth');
  // Set the final position of the Earth
  // earth.style.width = "1500px"
  earth.style.animationDuration = "70s"
  // earth.style.bottom = '-1000px'; // Adjust according to the size of the image
});


// responsive navbar

const mobilenavbar = document.getElementById("mobilenavbar")

function mobileNav() {

  if (mobilenavbar.style.display == "none") {
    mobilenavbar.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  else {
    mobilenavbar.style.display = "none";
    document.body.style.overflow = "visible";
  }

}



const trusthead1 = document.getElementById("trusthead")
const trustdesc = document.getElementById("trustdesc")

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

const navigationh11 = document.getElementById("navigationh1")
const navigationsection = document.getElementById("navigation")



// tyro

const tyrohead1 = document.getElementById("tyrohead")
const tyrodesc1 = document.getElementById("tyrodesc")
//developercardwrap
const developercont = document.getElementById("developercardwrap")


var observer = new IntersectionObserver(callback, options);
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



      observer.unobserve(entry.target);
    }
    

  })

}


observer.observe(trusthead1);
observer.observe(trustdesc);
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