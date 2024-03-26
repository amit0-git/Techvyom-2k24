window.addEventListener('load', () => {
    const earth = document.querySelector('#earth');
    // Set the final position of the Earth
    earth.style.width="1500px"
    earth.style.animationDuration="70s"
    earth.style.bottom = '-1000px'; // Adjust according to the size of the image
  });


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