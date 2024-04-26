var college = document.getElementById("clg")
var event1 = document.getElementById("evt")
var prize = document.getElementById("prz")
var participant = document.getElementById("prt")



var myObject = {
    clg: 0,
    evt: 0,
    prz: 0,
    prt: 0




}




var section1 = document.getElementById("eventh1")
var section2 = document.getElementById("eventrow1")
var section3 = document.getElementById("eventText")


function playAnimation() {
    console.log("Play animation called")

    myObject.clg = 0;
    myObject.evt = 0;
    myObject.prz = 0;
    myObject.prt = 0;

    anime({
      targets: myObject,
      clg: 100,
      evt: 50,
      prz: 50000,
      prt: 10000,
      round: 1,
      easing: 'easeInOutExpo',
      update: function() {
        college.innerHTML = Math.round(myObject.clg) + "+";
        event1.innerHTML = Math.round(myObject.evt) + "+";
        prize.innerHTML = Math.round(myObject.prz) + "+";
        participant.innerHTML = Math.round(myObject.prt) + "+";
      }
    });
  }


const options = {
    threshold: 0.6
}


var observer = new IntersectionObserver(callback, options)



function callback(entries) {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            console.log(entry.target.id)




            // animation section

            if (entry.target.id == "eventh1") {
                entry.target.classList.add("fade-in")
                observer.unobserve(entry.target)

            }
            if (entry.target.id == "eventrow1") {
                entry.target.classList.add("fade-in")
                playAnimation();
            }
            if (entry.target.id == "eventText") {
                entry.target.classList.add("fade-in")
                observer.unobserve(entry.target)
            }

            //this keeps on intersecting again and again
            //to stop tis we use 
            
        }
    })
}



observer.observe(section1);
observer.observe(section2);
observer.observe(section3);