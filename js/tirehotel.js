$((function () {

    let button2Width = $(".newTires .btn").outerWidth();

    console.log(button2Width);

    $(".newTires .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width+5, ease: "sine"}).play();
    }));

    $(".newTires .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width, ease: "sine"}).play();
    }));
}));


