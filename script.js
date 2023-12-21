// Get the container element
let navContainer = document.getElementById("list_nav");

// Get all buttons with class="btn" inside the container
let navLinks = navContainer.getElementsByClassName("nav_link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

ScrollReveal().reveal(".home", { duration: 1000, delay: 300, reset: true, scale: 1.2 });

ScrollReveal().reveal(".fade-in", {
  duration: 1000,
  delay: 750,
  reset: true,
  scale:1.2
})
ScrollReveal().reveal(".fade-in-email", {
  duration: 850,
  delay: 300,
  reset: true,
  scale:1.2
})

ScrollReveal().reveal(".project", {
  duration: 850,
  delay: 300,
  reset: true,
});
ScrollReveal().reveal(".left-content", {
  duration: 850,
  delay: 300,
  reset: true,
  origin: "left",
  distance: "300px",
});
ScrollReveal().reveal(".right-content", {
  duration: 850,
  delay: 300,
  reset: true,
  origin: "right",
  distance: "300px",
});
ScrollReveal().reveal(".bot-content", {
  duration: 850,
  delay: 300,
  reset: true,
  origin: "top",
  distance: "300px",
});
ScrollReveal().reveal(".top-content", {
  duration: 850,
  delay: 300,
  reset: true,
  origin: "bottom",
  distance: "300px",
});

const menuBurger = document.querySelector('.menu-tiga');
let isWhite = true;
menuBurger.addEventListener('click', () => {
  if (isWhite) {
    menuBurger.style.color = 'crimson';
  } else {
    menuBurger.style.color = 'white';
  }
  isWhite = !isWhite;
  
})


