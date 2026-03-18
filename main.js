const links = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function switchPage(id) {
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    links.forEach(l => l.classList.remove("active"));
    document.querySelector(`[data-page="${id}"]`).classList.add("active");
}

links.forEach(link => {
    link.addEventListener("click", () => {
        switchPage(link.dataset.page);
    });
});

document.querySelectorAll("[data-page]").forEach(el => {
    el.addEventListener("click", () => {
        switchPage(el.dataset.page);
    });
});