const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");

    document.querySelectorAll(".links").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        links.classList.remove("active");
    }))
        
})

document.body.classList.add('animate-left animate-opacity');

window.addEventListener("load", showPage, false);

function showPage() {
  document.body.classList.remove('animate-left animate-opacity');
}
