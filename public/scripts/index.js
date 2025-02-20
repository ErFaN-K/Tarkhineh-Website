// Config SwiperJs
let heroSectionSwiperConfig = new Swiper('.mySwiper', {
    pagination: {
        el: ".hero__page--swiper",
        clickable: true
    },
    grabCursor: true,
    effect: "fade",
    autoplay: {
        delay: 5000
    },
    loop: true,
})