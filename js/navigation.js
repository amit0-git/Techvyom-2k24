//arr format name,img,link
const arr = [["Hackathon", document.querySelector("#navWrap > div:nth-child(1) > img"), "hackathon.html"], ["Events", document.querySelector("#navWrap > div:nth-child(3) > img"), "events.xml"], ["Rulebook", document.querySelector("#navWrap > div:nth-child(9) > img"), "rulebook.html"], ["Gallery", document.querySelector("#navWrap > div:nth-child(7) > img"), "gallery.html"],["Home", document.querySelector("#navWrap > div:nth-child(5) > img"), "index.html"]]
var start = 0
const leftArrow = document.getElementById("left-nav-arrow");
const rightArrow = document.getElementById("right-nav-arrow");

// nav-right-button
const button = document.getElementById("nav-right-button")

const scaleSize = "1.3"
var content = document.getElementById("nav-content")

rightArrow.addEventListener("click", navigateFor)
leftArrow.addEventListener("click", navigateBac)


button.addEventListener("click", openLink)

function openLink() {
    window.open(arr[start][2], '_self')
}

function navigateFor() {


    //check

    if (start == arr.length - 1) {
        arr[arr.length - 1][1].style.scale = "1";
        start = 0

    }

    else {
        start = start + 1;
        arr[start - 1][1].style.scale = "1";
    }

    changeNavigationContent(start)

    console.log(start)


}


function navigateBac() {
    if (start == 0) {
        arr[0][1].style.scale = "1";
        start = arr.length - 1


    }

    else {
        start = start - 1
        arr[start + 1][1].style.scale = "1";
    }
    changeNavigationContent(start)
    console.log(start)
}


function changeNavigationContent(index) {

    //change content
    content.innerHTML = arr[index][0]

    // raise image
    arr[index][1].style.scale = scaleSize;

}