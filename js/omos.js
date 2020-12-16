$((function () {

    let button2Width = $(".aboutFlexLeft .btn").outerWidth();

    $(".aboutFlexLeft .btn").mouseover((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width: button2Width + 8, ease: "sine"}).play();
    }));

    $(".aboutFlexLeft .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width: button2Width, ease: "sine"}).play();
    }));

}));


