function introAnimation(){
    var tl = gsap.timeline();
    tl
    .from("#navbar, .coverimg , #info , .title, crumb , tag",2,
    {
      y: "100",
      opacity: 0,
      ease: "expo.inOut",
      stagger: 0.09,
    }
  )
}

function loaderAnimation() {
  var tl = gsap.timeline();

tl
.to("#loader", {
  height: 0,
  duration: 1.75,
  stagger: 0,
  ease: "circ.inOut"
  }
)
}

function imgShrink(){
    gsap.from('.bg-section',{
        scrollTrigger:{
            trigger:'.bg-section',
            scrub:true
        },
        width:'80%',
        duration: 4,
    });
}

function textReveal(){
 window.addEventListener("DOMContentLoaded", (event) => {
      let typeSplit = new SplitType("[text-split]", {
        types: "words, chars",
        tagName: "span"
      });
    
      $("[animate]").each(function (index) {
        let tl = gsap.timeline();
        tl.from('.word', {
          delay: 1,
          opacity: 0, 
          yPercent: 100, 
          duration: 1.35, 
          ease: "expo.inOut", 
          stagger: { amount: 0.08 } 
        });
    
        //  ScrollTrigger.create ({
        //    trigger: $(this),
        //    start: "top bottom",
        //    onEnter: () => tl.restart()
        //  });
      });
     });
}

function titleFade(){
  gsap.to("#project-content", {
      opacity: 0.1,
      scrollTrigger: {
      scrub: true,
      trigger: '#project-content',
      start: "top top",
      scroller: "body",
    }
  })
}

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false});
loaderAnimation();
introAnimation();
imgShrink();
textReveal();
titleFade();