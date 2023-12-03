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
    gsap.set("main .parent .child", {
        y: "100%"
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
        // delay: 1,
        stagger: 0.2,
        ease: "expo.inOut"
    }).to("#loader", {
        autoAlpha: 0,
        // height: 0,
        duration: 0.9,
        // stagger: 0.2,
        ease: "ease.inOut",
        onComplete: function() {
            animatePage()
        }
    })
}

function animatePage() {
    var tl = gsap.timeline();
    tl.to("main .parent .child", {
        y: 0,
        delay: -1.2,
        duration: 3.2,
        stagger: 0.145,
        ease: "expo.inOut"
    })
}
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false
});
revealToplug();
valueSetters();
loaderAnimation();