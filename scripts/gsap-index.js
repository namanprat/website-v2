function revealToplug() {
    document.querySelectorAll(".reveal").forEach(function(elem) {
        var parent = document.createElement("plug");
        var child = document.createElement("plug");
        parent.classList.add("parent");
        child.classList.add("child");
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = "";
        elem.appendChild(parent)
    })
}

function valueSetters() {
    gsap.set(".heroMarquee h1", {
        y: "100%"
    });
    gsap.set("main .parent .child", {
        y: "100%"
    });
    gsap.set("#left", {
        x: 0,
        opacity: '1'
    });
    gsap.set("#right", {
        x: 0,
        opacity: '1'
    })
}

function loaderAnimation() {
    var tl = gsap.timeline();
    tl.from("#loader .child plug", {
        y: "100%",
        duration: 1,
        stagger: 0.2,
        ease: "expo.inOut"
    }).to("#loader .parent .child", {
        yPercent: -100,
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: "expo.inOut"
    }).to("#loader", {
        autoAlpha: 0,
        // height: 0,
        duration: 0.75,
        stagger: 0.2,
        ease: "ease.inOut",
        onComplete: function() {
            animateHomepage()
        }
    })
}

function animateHomepage() {
    var tl = gsap.timeline();
    tl.to("main .parent .child", {
        y: 0,
        delay: -1.2,
        duration: 3,
        stagger: 0.135,
        ease: "expo.inOut"
    })
}

function xAxisScroll() {
    var tl = gsap.timeline();
    tl.to("#scroll-fade", {
        opacity: '0',
        scrollTrigger: {
            delay: -3,
            trigger: ".hero-container",
            scroller: "body",
            ease: "power4.inOut",
            start: "top -5%",
            end: "top -75%",
            scrub: 1
        }
    }).to("#left", {
        opacity: '0',
        x: -200,
        stagger: 0.07,
        scrollTrigger: {
            delay: -2,
            trigger: ".hero-container",
            scroller: "body",
            ease: "power4.inOut",
            start: "top -5%",
            end: "top -90%",
            scrub: 1
        }
    }).to("#right", {
        opacity: '0',
        x: 200,
        delay: -3,
        scrollTrigger: {
            trigger: ".hero-container",
            scroller: "body",
            ease: "power4.inOut",
            start: "top -5%",
            end: "top -90%",
            scrub: 1
        }
    }).to("#extra-text", {
        opacity: '0',
        delay: -3,
        scrollTrigger: {
            trigger: ".hero-container",
            scroller: "body",
            ease: "power4.inOut",
            start: "top -5%",
            end: "top -90%",
            scrub: 1
        }
    })
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
                yPercent: 100,
                duration: 1.7,
                ease: "expo.inOut",
                stagger: {
                    amount: 0.3
                }
            });
            ScrollTrigger.create({
                trigger: $(this),
                start: "top 70%",
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
        gsap.to("#work-title", {
            opacity: 0.065,
            scrollTrigger: {
                scrub: true,
                trigger: '#work-title',
                start: "top top",
                scroller: "body",
            }
        })
    })
}
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false
});
revealToplug();
valueSetters();
loaderAnimation();
xAxisScroll();
textReveal();