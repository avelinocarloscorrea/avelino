
//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {

	 navbar.classList.toggle("nav-active");

      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.1s ease forwards ${index / 15+0.3}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }

	}

window.onload = () => navSlide();




