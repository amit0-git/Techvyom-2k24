
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







const eventh1 = document.getElementById("eventh1");

const tyroh1 = document.getElementById("tyrohead");

const trusth1 = document.getElementById("trusthead");
//navigationh1

const navigationh1 = document.getElementById("navigationh1");


const developerh1 = document.getElementById("developerh1");



const maphead=document.getElementById("map-head")





eventh1.addEventListener("mouseenter", () => {
    randomTextAnimation("EVENTS", eventh1)
});

tyroh1.addEventListener("mouseenter", () => {
    randomTextAnimation("TYRO CLUB", tyroh1)
});

trusth1.addEventListener("mouseenter", () => {
    randomTextAnimation("ABOUT THE TRUST", trusth1)
});

navigationh1.addEventListener("mouseenter", () => {
    randomTextAnimation("NAVIGATION", navigationh1)
});

developerh1.addEventListener("mouseenter", () => {
    randomTextAnimation("DESIGN & DEVELOPMENT TEAM", developerh1)
});

maphead.addEventListener("mouseenter", () => {
    randomTextAnimation("VENUE", maphead)
});




