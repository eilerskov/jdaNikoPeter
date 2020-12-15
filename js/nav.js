$(function () {
    let Load = .2;

    let tween1;

    let logoWidth = $('.logo').outerWidth();

    let buttonWidth = $('a .btn').outerWidth();

    let buttonRadius = $('a .btn').borderRadius;

    console.log(buttonRadius)

    // $('.phoneIcon').mouseover(function() {
    //     tween1 = gsap.to('.phoneIcon', 0.4, {delay:0 , repeat:5, yoyo:true, rotationZ:15, ease:"sine"});
    //     tween1.play();
    // });
    //
    // $('.phoneIcon').mouseleave(function() {
    //     let tween2 = gsap.to('.phoneIcon', 0.6, {delay:0, rotationZ:0});
    //     tween1.kill();
    //     tween2.play();
    // });

    $("a .btn").mouseover((function (x){
       tween1 = gsap.to(x.currentTarget, .4, {delay: 0, borderRadius:"0.7em", ease: "sine"}).play();
    }));

    $("a .btn").mouseleave((function (x){
        tween1.kill();
        gsap.to(x.currentTarget, .4, {delay: 0,borderRadius:"0.25em", ease: "sine"}).play();
    }));

    $('.logo').mouseover(function() {
        tween2 = gsap.to('.logo', 0.3, {delay:0, width:logoWidth + 15}).play();
    });

    $('.logo').mouseleave(function() {
        tween2.kill();
        gsap.to('.logo', 0.3, {delay:0, width:logoWidth}).play();
    });
});