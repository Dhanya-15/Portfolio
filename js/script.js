// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY + 160; // adjust this number to match your header height + a small buffer
  let currentId = "";

  sections.forEach((sec) => {
    let sectionTop = sec.offsetTop;
    let sectionHeight = sec.offsetHeight;

    if (top >= sectionTop && top < sectionTop + sectionHeight) {
      currentId = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentId) {
      link.classList.add("active");
    }
  });

  // Sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //    remove toggle icon and navbar when click navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

const typed = new Typed('.multiple-text', {
  strings: ['I am a Software Developer', 'I Craft Modern Tech Solutions', 'I Build Ideas Into Reality'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.sr-left', { origin: 'left' });
ScrollReveal().reveal('.sr-right', { origin: 'right' });
ScrollReveal().reveal('.sr-fade', { origin: 'bottom', interval: 200 });
