function titleReveal() {
    window.addEventListener("DOMContentLoaded", (event) => {
        let typeSplit = new SplitType("[text-split]", {
            types: "words, chars",
            tagName: "span"
        });
        $("[animate]").each(function(index) {
            let tl = gsap.timeline();
            tl.from(".word", {
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
titleReveal();