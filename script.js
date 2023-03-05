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

