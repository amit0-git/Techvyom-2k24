


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
