let owl = $(".owl-carousel");
owl.owlCarousel({
    loop: true
    , items: 3
    , margin: 50
    , dotsContainer: ".dots"
    , dotsEach: true
    , responsive: {
        0: {
            items: 1
        , }
        , 700: {
            items: 2
        , }
        , 1000: {
            margin: 300
            , items: 3
        , }
    , }
, });

// Burger menu
$(document).ready(function () {
    $('.header-burger__btn').click(function (event) {
        $('.header-burger__btn , .header-burger__nav').toggleClass('active');
    });
});

// Go to the next item
$(".arrow-right").click(function () {
    owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".arrow-left").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
});
$(".dot").click(function () {
    owl.trigger("to.owl.carousel", [$(this).index(), 300]);
});
