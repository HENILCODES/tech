$(".testi-slider").slick({
    dots: !1,
    infinite: !0,
    autoplay: !0,
    arrows: !0,
    speed: 800,
    prevArrow: '<i class="bi bi-arrow-right dandik"></i>',
    nextArrow: '<i class="bi bi-arrow-left bamdik"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
    ],
})  