
// responsive navbar

const mobilenavbar=document.getElementById("mobilenavbar")

function mobileNav(){

  if (mobilenavbar.style.display=="none"){
    mobilenavbar.style.display="block";
    document.body.style.overflow="hidden";
  }
  else{
    mobilenavbar.style.display="none";
    document.body.style.overflow="visible";
  }

}







function generateRandomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

// Function to update the loading animation
function updateLoadingAnimation(textDiv, length1) {

    textDiv.innerHTML = '';

    // Generate random characters and append them to the loading animation

    for (let i = 0; i < length1; i++) {
        textDiv.innerHTML += generateRandomChar();
    }
}




function randomTextAnimation(text, textDiv) {

    const interval = setInterval(() => {
        updateLoadingAnimation(textDiv, text.length);
    }, 60);

    // Clear the interval after 3 seconds
    setTimeout(() => {
        clearInterval(interval);
        //update the div

        textDiv.innerHTML = text;
        console.log("Animation stopped")
    }, 700);




}


const eventh11=document.getElementById("eventHH")

eventh11.addEventListener("mouseenter", () => {
    randomTextAnimation("Events", eventh11)
});




//display game only on desktop

const gamenav = document.getElementsByClassName("gamenav");

Array.from(gamenav).forEach((element) => {
  if (window.innerWidth <= 850) {
    console.log("Hide Game Icon");
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
});
