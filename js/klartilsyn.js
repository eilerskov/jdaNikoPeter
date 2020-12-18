$((function () {

    let button2Width = $(".klarTilSyn .btn").outerWidth();

    console.log(button2Width);

    $(".klarTilSyn .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width+5, ease: "sine"}).play();
    }));

    $(".klarTilSyn .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width, ease: "sine"}).play();
    }));

    if (window.innerWidth >= 768){
        gsap.to(".synImage",{
            scrollTrigger:{
                trigger:".firstSektion",
                start:"top bottom",
                end:"top top",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to(".synText",{
            scrollTrigger:{
                trigger:".firstSektion",
                start:"top bottom",
                end:"top top",
                immediateRender: false,
                scrub:true
            },
            x:0
        });
    }

}));


