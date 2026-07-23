/*=========================================
HARTION STUDIO SCRIPT
PART 1
=========================================*/

/* Sticky Header */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

/* Mobile Menu */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}

/* Close Menu */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});

/* Active Navigation */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*=========================================
HARTION STUDIO SCRIPT
PART 2
=========================================*/

/* Scroll Reveal */

const revealElements = document.querySelectorAll(
".fade-up,.fade-left,.fade-right"
);

function revealOnScroll(){

const trigger = window.innerHeight - 100;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/* Counter */

const counters=document.querySelectorAll(".counter-box h2");

let counterStarted=false;

function startCounter(){

if(counterStarted) return;

const section=document.querySelector(".counter");

if(!section) return;

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-120){

counterStarted=true;

counters.forEach(counter=>{

const target=+counter.innerText.replace(/\D/g,'');

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

}

}

window.addEventListener("scroll",startCounter);

/* Back To Top */

const topBtn=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";
topBtn.style.visibility="visible";

}else{

topBtn.style.opacity="0";
topBtn.style.visibility="hidden";

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* Hero Image Animation */

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x=(window.innerWidth/2-e.pageX)/35;

const y=(window.innerHeight/2-e.pageY)/35;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

/* Header Shadow */

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.boxShadow="0 8px 30px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});
/*=========================================
HARTION STUDIO SCRIPT
PART 3
=========================================*/

/* Portfolio Filter */

const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.dataset.category === filter
            ) {

                item.style.display = "block";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 150);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(.8)";

                setTimeout(() => {

                    item.style.display = "none";

                }, 250);

            }

        });

    });

});

/* FAQ */

document.querySelectorAll(".faq-item").forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        document.querySelectorAll(".faq-item").forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* Testimonials Auto Slider */

const slider = document.querySelector(".testimonial-slider");

if (slider) {

    let scrollAmount = 0;

    setInterval(() => {

        scrollAmount += 380;

        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {

            scrollAmount = 0;

        }

        slider.scrollTo({

            left: scrollAmount,

            behavior: "smooth"

        });

    }, 4000);

}

/* Golden Particles */

const particleContainer = document.querySelector(".gold-particles");

if (particleContainer) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("span");

        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = 4 + Math.random() * 6 + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";
        particle.style.opacity = Math.random();

        particleContainer.appendChild(particle);

    }

}

/* Page Loader */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }

});

/* Current Year */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("Hartion Studio Website Loaded Successfully");
