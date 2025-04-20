const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Close nav if click outside
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("show");
  }
});
