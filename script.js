// Loading Screen

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

if(loader){
loader.classList.add("loader-hidden");
}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// Navbar Effect

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "rgba(0,0,0,0.95)";
header.style.boxShadow = "0 0 25px rgba(255,215,0,0.15)";

}else{

header.style.background = "rgba(0,0,0,0.7)";
header.style.boxShadow = "none";

}

});

// Countdown Event

const countdownDate = new Date("Jul 17, 2026 18:00:00").getTime();

const timer = setInterval(() => {

const now = new Date().getTime();

const distance = countdownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

const countdown = document.getElementById("countdown");

if(countdown){

countdown.innerHTML =
`${days} Ημέρες ${hours} Ώρες ${minutes} Λεπτά ${seconds} Δευτ.`;

}

if(distance < 0){

clearInterval(timer);

if(countdown){

countdown.innerHTML = "Η ΣΥΝΑΝΤΗΣΗ ΞΕΚΙΝΗΣΕ";

}

}

},1000);

// Reveal Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.event-box,.featured")
.forEach(el => observer.observe(el));

// Gallery Lightbox

const galleryImages = document.querySelectorAll(".card img");

galleryImages.forEach(image => {

image.addEventListener("click", () => {

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML =
`<img src="${image.src}">`;

document.body.appendChild(lightbox);

lightbox.addEventListener("click", () => {

lightbox.remove();

});

});

});

// Hero Animation

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

setInterval(() => {

heroTitle.style.textShadow =
`0 0 ${20 + Math.random()*40}px #FFD700`;

},700);

}
