/*====================================
VEHICLE SLIDER
====================================*/

document.addEventListener("DOMContentLoaded", function () {

    const vehicleSlider = document.querySelector(".vehicle-slider");

    if (vehicleSlider) {

        new Swiper(".vehicle-slider", {

            loop: true,

            speed: 1000,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            spaceBetween: 25,

            slidesPerView: 3,

            breakpoints: {

                0: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },

                576: {
                    slidesPerView: 1
                },

                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },

                992: {
                    slidesPerView: 3,
                    spaceBetween: 25
                }

            }

        });

    }

});



