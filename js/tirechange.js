$((function () {

    let button2Width = $(".flexCon .btn").outerWidth();

    $(".flexCon .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width+5, ease: "sine"}).play();
    }));

    $(".flexCon .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width, ease: "sine"}).play();
    }));
}));


