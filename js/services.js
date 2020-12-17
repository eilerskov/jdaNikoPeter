$((function () {

    let button2Width = $(".cardBtn .btn").outerWidth();

    $(".cardBtn .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width+5, ease: "sine"}).play();
    }));

    $(".cardBtn .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width, ease: "sine"}).play();
    }));
}));


