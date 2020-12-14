$(function () {
    let Load = .2;

    let tween1;

    let logoWidth = $('.logo').outerWidth();

    $('.phoneIcon').mouseover(function() {
        tween1 = gsap.to('.phoneIcon', 0.4, {delay:0 , repeat:5, yoyo:true, rotationZ:15, ease:"sine"});
        tween1.play();
    });

    $('.phoneIcon').mouseleave(function() {
        let tween2 = gsap.to('.phoneIcon', 0.6, {delay:0, rotationZ:0});
        tween1.kill();
        tween2.play();
    });

    $('.logo').mouseover(function() {
        tween1 = gsap.to('.logo', 0.1, {delay:0, width:logoWidth + 15});
        tween1.play();
    });

    $('.logo').mouseleave(function() {
        tween1 = gsap.to('.logo', 0.1, {delay:0, width:logoWidth});
        tween1.play();
    });
});