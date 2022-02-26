window.addEventListener("scroll", ()=> {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggle() {
    let header = document.querySelector("header");
    header.classList.toggle("active");
}