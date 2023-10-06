
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
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();

// frase

const consoleText = document.getElementById("console-text");
const texts = [
    "const imagina = 'creatividad';",
    "let ideas = ['imaginación', 'creación', 'sorpresas'];",
    "for (let lugar of ideas) {",
    "    console.log(`Donde las ${lugar} toman forma.`);",
    "}",
    "let mentes = ['creativas', 'innovadoras', 'imaginativas'];",
    "mentes.forEach(mente => {",
    "    console.log(`Donde las ${mente} se encuentran.`);",
    "});",
    "let posibilidades = 'infinitas';",
    "console.log(`Un rincón de posibilidades ${posibilidades}.`);",
    "let espacio = 'creativo';",
    "console.log(`El espacio donde nacen las ideas ${espacio}.`);",
    "console.log('Imagina, crea, sorprende.');",
    "let mente = 'arte';",
    "console.log(`Donde la mente se convierte en ${mente}.`);",
    "let mundos = ['fantasía', 'creatividad', 'invención'];",
    "for (let mundo of mundos) {",
    "    console.log(`Explorando mundos de ${mundo}.`);",
    "}",
    "console.log('El lugar donde todo es posible.');",
    "console.log('Dando vida a la imaginación.');",
    "console.log('Donde los pensamientos se hacen realidad.');",
    "console.log('Despierta tu creatividad aquí.');",
    "console.log('El rincón de las ideas brillantes.');",
    "console.log('Donde las palabras se convierten en magia.');",
    "console.log('Un mundo lleno de inspiración.');",
    "console.log('Cultivando la creatividad a diario.');",
    "console.log('Explora y descubre tu creatividad interior.');",
    "console.log('Donde los sueños se convierten en proyectos.');",
    "console.log('Un espacio para la mente creativa.');",
];


let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const cursor = document.createElement("span");
cursor.textContent = "_"; // Símbolo del cursor
cursor.style.animation = "blink 0.3s step-end infinite"; // Animación de parpadeo


consoleText.parentNode.insertBefore(cursor, consoleText.nextSibling);

function typeText() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        consoleText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        consoleText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, 50);
    }
}

typeText();
