function introAnimation() {
    var tl = gsap.timeline();
    tl.from("#navbar, .coverimg , #about , .title, #hero h4 , tag", 3, {
        y: "100",
        delay: 1,
        opacity: 0,
        ease: "expo.inOut",
        stagger: 0.1
    })
}

function imgShrink() {
    gsap.from('.bg-section', {
        scrollTrigger: {
            trigger: '.bg-section',
            scrub: true
        },
        width: '75%',
        duration: 4
    })
}

function titleReveal() {
    window.addEventListener("DOMContentLoaded", (event) => {
        let typeSplit = new SplitType("[text-split]", {
            types: "words, chars",
            tagName: "span"
        });
        $("[animate]").each(function(index) {
            let tl = gsap.timeline();
            tl.from(".char", {
                delay: 2.5,
                opacity: 0,
                yPercent: 100,
                duration: 1.5,
                ease: "expo.inOut",
                stagger: {
                    amount: 0.3
                }
            })
        })
    })
}

// function textReveal() {
//     window.addEventListener("DOMContentLoaded", (event) => {
//         let typeSplit = new SplitType("[line-split]", {
//             types: "words",
//             tagName: "spun"
//         });
//         $("[reveal]").each(function(index) {
//             let tl = gsap.timeline();
//             tl.from(".word", {
//                 delay: 2.5,
//                 opacity: 0,
//                 yPercent: 100,
//                 duration: 1.35,
//                 ease: "expo.inOut",
//                 stagger: {
//                     amount: 0.3
//                 }
//             })
//         })
//     })
// }

function textReveal() {
    window.addEventListener("DOMContentLoaded", (event) => {
        let typeSplit = new SplitType("[line-split]", {
            types: "words",
            tagName: "spun"
        });
        $("[reveal]").each(function(index) {
            let tl = gsap.timeline({
                paused: true
            });
            tl.from($(this).find(".word"), {
                opacity: 0,
                yPercent: 100,
                duration: 1.2,
                ease: "ease.inOut",
                stagger: {
                    amount: 0.3
                }
            });
            ScrollTrigger.create({
                trigger: $(this),
                start: "top 30%",
                onEnter: () => tl.play()
            });
            ScrollTrigger.create({
                trigger: $(this),
                onLeaveBack: () => tl.pause(0)
            });
        })
    })
}

function titleFade() {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
        gsap.to("#project-content", {
            opacity: 0.1,
            scrollTrigger: {
                scrub: true,
                trigger: '#project-content',
                start: "top top",
                scroller: "body"
            }
        })
    })
}
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false
});
introAnimation();
imgShrink();
titleReveal();
titleFade();
textReveal();