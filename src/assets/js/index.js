import "../styles/app.scss";

let swiper = new Swiper('.swiper', {

});
const mediaQuery = window.matchMedia('(max-width: 1024px)');
const handleMediaQueryChange = (e) => {
    if (e.matches) {
        swiper = new Swiper('.swiper', {
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
    } else {
        swiper.destroy();
    }
}
window.addEventListener('DOMContentLoaded', () => {
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
})
