const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


/* FAQ SECTION START */

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            // Sab close karo
            faqItems.forEach((faq) => {
                faq.classList.remove("active");

                faq.querySelector(".faq-answer")
                    .classList.remove("show");

                faq.querySelector(".faq-icon")
                    .textContent = "+";
            });

            
            if (!isActive) {

                item.classList.add("active");

                item.querySelector(".faq-answer")
                    .classList.add("show");

                item.querySelector(".faq-icon")
                    .textContent = "−";
            }
        });

    });

});
{/* FAQ section end */}




const revealElements = document.querySelectorAll(
    "section, .fleet-card, .card, .price-card, .why-new-box, .testi-card, .contact-box, footer"
);

revealElements.forEach((el) => {
    el.classList.add("reveal");
});

const revealOnScroll = () => {
    revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);