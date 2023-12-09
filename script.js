// Get the container element
let navContainer = document.getElementById("list_nav");
console.log(navContainer);

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
