


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