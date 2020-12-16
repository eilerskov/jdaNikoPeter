$((function () {

    // let buttonHeight = ($(".headerBtns .btn").innerHeight()-$(".headerBtns .btn").height())/2;
    let buttonHeight = $(".headerBtns .btn").outerHeight();

    let button2Width = $(".ctaBtn .btn").outerWidth();

    $(".headerBtns .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, height:buttonHeight+5, ease: "sine"}).play();
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
    }));

    $(".ctaBtn .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width+8, ease: "sine"}).play();
    }));

    $(".ctaBtn .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width, ease: "sine"}).play();
    }));

    $(".cardBtn .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width+5, ease: "sine"}).play();
    }));

    $(".cardBtn .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width, ease: "sine"}).play();
    }));

    $(".leasingDesktop a .btn").mouseover((function (x){
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width+5, ease: "sine"}).play();
    }));

    $(".leasingDesktop a .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width:button2Width, ease: "sine"}).play();
    }));

    if (window.innerWidth >= 768){
        gsap.to(".pic1",{
        scrollTrigger:{
            trigger:".pic1",
            start:"top bottom",
            end:"bottom bottom",
            immediateRender: false,
            scrub:true
       },
        x:0
        });
    }

    if (window.innerWidth < 1200){

        gsap.to("#card1",{
            scrollTrigger:{
                trigger:".hej",
                start:"top bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to("#card2",{
            scrollTrigger:{
                trigger:".hej",
                start:"top bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to("#card3",{
            scrollTrigger:{
                trigger:"#card3",
                start:"top bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to("#card4",{
            scrollTrigger:{
                trigger:"#card3",
                start:"top bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to("#card5",{
            scrollTrigger:{
                trigger:"#card5",
                start:"top bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to("#card6",{
            scrollTrigger:{
                trigger:"#card5",
                start:"top bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        })}
        else{
        gsap.to("#card1",{
            scrollTrigger:{
                trigger:".hej",
                start:"top bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to("#card3",{
            scrollTrigger:{
                trigger:".hej",
                start:"top bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to("#card4",{
            scrollTrigger:{
                trigger:"#card4",
                start:"center bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });

        gsap.to("#card6",{
            scrollTrigger:{
                trigger:"#card4",
                start:"center bottom",
                end:"top center",
                immediateRender: false,
                scrub:true
            },
            x:0
        });
    }
}));