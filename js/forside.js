$((function () {

    // let buttonHeight = ($(".headerBtns .btn").innerHeight()-$(".headerBtns .btn").height())/2;
    let buttonHeight = $(".headerBtns .btn").outerHeight();

    let fbWidth = $(".fbContainer").outerWidth();

    $(".headerBtns .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, height:buttonHeight+8, ease: "sine"}).play();
    }));

    $(".headerBtns .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, height:buttonHeight, ease: "sine"}).play();
    }));

    $(".fbContainer").mouseover((function (x) {
        tween1 = gsap.to($(".fbContainer .arrow"), .5, {delay: 0, paddingLeft:10, ease: "sine"}).play();
    }));

    $(".fbContainer").mouseleave((function (x) {
        tween1.kill();
        gsap.to($(".fbContainer .arrow"), .5, {delay: 0, paddingLeft:0, ease: "sine"}).play();
    }))
}));