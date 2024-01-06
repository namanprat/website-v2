function valueSet() {
    gsap.set("#overlay-bg", {
        autoAlpha: 0
    });
    gsap.set(".menu-item a", {
        y: "100%"
    });
    gsap.set("#overlay-bottom", {
        opacity: 0
    });
    gsap.set("#overlay", {
        x: "100%"
    });
    gsap.set("#nav-menu a", {
        autoAlpha: 1
    })
}

function navScroll() {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1000px)", () => {
        gsap.to("#nav-menu a", {
            autoAlpha: 0,
            ease: "power4.inOut",
            scrollTrigger: {
                scrub: 1,
                trigger: '#nav-menu',
                start: "top",
                scroller: "body",
                stagger: {
                    amount: 0.3
                }
            }
        })
    })
}

function navFade() {
    let mm = gsap.matchMedia();
    mm.add("(max-width: 1000px)", () => {
        gsap.to("#nav-menu a", {
            ease: "power4.inOut",
            stagger: 1,
            autoAlpha: 0
        })
    })
}

function buttonAnimation() {
    overlayAnimation();
    var tl = gsap.timeline({
        paused: true,
        reversed: true
    });
    const toggleBtn = document.getElementById("menu");
    // const hamburger = document.getElementById("hamburger");
    toggleBtn.onclick = function(e) {
        // hamburger.classList.toggle("active");
        tl.reversed(!tl.reversed())
    }
};

function overlayAnimation() {
    var tl = gsap.timeline({
        paused: true,
        reversed: true
    });
    tl.to("#nav-menu a", {
        ease: "power4.inOut",
        duration: 1,
        stagger: 0.01,
        autoAlpha: 0
    }, "<").to("#overlay-bg", {
        ease: "power4.inOut",
        duration: 1,
        autoAlpha: 1
    }, "<").to("#overlay", {
        x: "0",
        ease: "power4.inOut",
        duration: 1.5
    }, "<").to(".menu-item a , #overlay-bottom", {
        y: "0",
        opacity: 1,
        duration: 2,
        ease: "power4.inOut",
        stagger: 0.15
    }, "<");
Array.from(document.querySelectorAll(".menu-close, .menu-open")).forEach(e => e.addEventListener("click", function() {
        tl.reversed() ? tl.play() : tl.reverse()
    }))
}
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false
});
buttonAnimation();
navScroll();
navFade();
valueSet();