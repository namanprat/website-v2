function introAnimation(){
    gsap.from("#navbar, .coverimg , .title, crumb , #info",2,
    {
      y: "250",
      opacity: 0,
      ease: "expo.inOut",
      stagger: 0.08,
    }
  );
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
          duration: 1.5, 
          ease: "expo.inOut", 
          stagger: { amount: 0.05 } 
        });
    
        // ScrollTrigger.create ({
        //   trigger: $(this),
        //   delay: 0.05,
        //   start: "top bottom",
        //   onEnter: () => tl.restart()
        // });
      });
     });
}

loaderAnimation();
introAnimation();
imgShrink();
textReveal();