


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