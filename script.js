// =============================
// Smooth Scroll Navigation
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// =============================
// Scroll Reveal Animation
// =============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.classList?.remove?.("show");
            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});

// =============================
// Typing Animation
// =============================

const words = [
    "Cyber Security Student",
    "Ethical Hacker",
    "Penetration Tester",
    "Web Security Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero h2");

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < words[wordIndex].length) {

        typingElement.textContent +=
            words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

if (typingElement) {

    typingElement.textContent = "";

    typeEffect();

}

// =============================
// Navbar Shadow
// =============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 10px 30px rgba(255,255,255,.08)";

    } else {

        nav.style.boxShadow = "none";

    }

});

// =============================
// Floating Cards Effect
// =============================

document.querySelectorAll(
    ".skill, .project-card, .cert"
).forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX =
            -(y - rect.height / 2) / 15;

        const rotateY =
            (x - rect.width / 2) / 15;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// =============================
// Sparkle Generator
// =============================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}

setInterval(createSparkle, 300);

// =============================
// Luxury Cursor Glow
// =============================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
