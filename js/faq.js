
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






// faq section


const faqbtns = document.getElementsByClassName("faqbutton");
const faqdescs = document.getElementsByClassName("faqdesc");

const faqh1 = document.getElementById("faqh1");



faqh1.addEventListener("mouseenter", () => {
    randomTextAnimation("FAQs", faqh1)
});









Array.from(faqbtns).forEach((faqbtn, index) => {
    faqbtn.addEventListener("click", () => displayfaq(index));
});

function displayfaq(index) {
    const faqdesc = faqdescs[index];
    const faqbtn = faqbtns[index];

    if (faqdesc.style.display === "none" || faqdesc.style.display === "") {
        faqdesc.style.display = "block";
        faqbtn.style.transform = "rotate(180deg)";
    } else {
        faqdesc.style.display = "none";
        faqbtn.style.transform = "rotate(0deg)";
    }
}
