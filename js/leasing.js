$((function () {

    let button2Width = $(".kontaktOs .btn").outerWidth();

    $(".kontaktOs .btn").mouseover((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width: button2Width + 8, ease: "sine"}).play();
    }));

    $(".kontaktOs .btn").mouseleave((function (x) {
        gsap.to(x.currentTarget, .5, {delay: 0, width: button2Width, ease: "sine"}).play();
    }));

    if (window.innerWidth >= 768) {
        gsap.to(".tire1", {
            scrollTrigger: {
                trigger: ".firstSektionText ",
                start: "center center",
                immediateRender: false,
                scrub: false
            },
            x: 0
        });

        gsap.to(".tire2", {
            scrollTrigger: {
                trigger: ".firstSektionText ",
                start: "center center",
                immediateRender: false,
                scrub: false
            },
            x: 0
        });

        gsap.to(".tire3", {
            scrollTrigger: {
                trigger: ".firstSektionText ",
                start: "center center",
                immediateRender: false,
                scrub: false
            },
            x: 0
        });

        gsap.to(".tire4", {
            scrollTrigger: {
                trigger: ".firstSektionText ",
                start: "center center",
                immediateRender: false,
                scrub: false
            },
            x: 0
        })}
}));


