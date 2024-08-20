import "../styles/app.scss";

const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
});

