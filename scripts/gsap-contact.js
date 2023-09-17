function valueSetters() {
    gsap.set(".heroMarquee h1", {
        y: "100%"
    });
     gsap.set("#social-cluster > *", {
        y: "100%",
        opacity: 0
    })
}

function animatePage() {
    var tl = gsap.timeline();
    tl.to(".heroMarquee h1", {
        y: 0,
        delay: 0.35,
        duration: 3,
        stagger: 0.05,
        ease: "expo.inOut"
    }, "<")
    .to("#social-cluster > *", {
        y: 0,
        delay: -1,
        duration: 2,
        opacity: 1,
        ease: "expo.inOut",
        stagger: 0.1
    })
}

function textReveal() {
    window.addEventListener("DOMContentLoaded", (event) => {
        let typeSplit = new SplitType("[text-split]", {
            types: "words, chars",
            tagName: "span"
        });
        $("[animate]").each(function(index) {
            let tl = gsap.timeline();
            tl.from(".char", {
                delay: 1.5,
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
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false
});
valueSetters();
animatePage();
textReveal();