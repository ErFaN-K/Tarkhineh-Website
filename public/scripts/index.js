// Config SwiperJs
let heroSectionSwiperConfig = new Swiper('.mySwiper', {
    pagination: {
        el: ".hero__page--swiper",
        clickable: true
    },
    grabCursor: true,
    effect: "fade",
    autoPlay: true,
    loop: true,
})