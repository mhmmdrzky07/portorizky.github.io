const reveals = document.querySelectorAll(
    ".profil-reveal, .pendidikan-reveal, .keahlian-reveal, .tentang-reveal, .perjalanan-reveal, .belajar-reveal, .rencana-reveal, .prinsip-reveal, .sosmed-reveal"
);

function revealOnScroll() {
    reveals.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();