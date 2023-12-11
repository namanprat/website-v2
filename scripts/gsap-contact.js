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

function aboutAnimation() {
    gsap.from("#about", {
        y: "100%",
        delay: 1.35,
        duration: 2.7,
        stagger: 0.135,
        ease: "expo.inOut",
      });
}

function textReveal() {
    window.addEventListener("DOMContentLoaded", (event) => {
        let typeSplit = new SplitType("[text-split]", {
            types: "words, chars",
            tagName: "span"
        });
        $("[animate]").each(function(index) {
            let tl = gsap.timeline({
                paused: true
            });
            tl.from($(this).find(".char"), {
                opacity: 0,
                delay: 2,
                yPercent: 100,
                duration: 1.3,
                ease: "expo.inOut",
                stagger: {
                    amount: 0.3
                }
            });
            ScrollTrigger.create({
                trigger: $(this),
                start: "top 90%",
                // markers: true,
                onEnter: () => tl.play()
            });
            ScrollTrigger.create({
                trigger: $(this),
                onLeaveBack: () => tl.pause(0)
            });
        })
    })
}
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false
});
valueSetters();
animatePage();
aboutAnimation();
textReveal();