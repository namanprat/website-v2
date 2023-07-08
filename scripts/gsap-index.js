function valueSetters(){
    gsap.set ("#left" , {x:0 , opacity: '1'});
    gsap.set ("#right" , {x:0 , opacity: '1'});
}

function heroText(){
    $("[hero]").each(function (index) {
        let tl = gsap.timeline({paused:true});
        tl.from(".char", {
          opacity: 0,
          yPercent: 100,
          duration: 1.35,
          ease: "expo.inOut",
          stagger: { amount: 0.3 }
        })
    })
   }

function xAxisScroll(){
    var tl = gsap.timeline();
    tl
    .to("#scroll-fade" ,{
        opacity: '0',
        scrollTrigger:{
            delay: -3,
            trigger:".hero-container" ,
            scroller: "body",
            ease: "power4.inOut",
            start:"top -5%",
            end:"top -75%",
            scrub: 1
        }
    })
    .to("#left" ,{
        opacity: '0',
        x:-200,
        stagger: 0.07,
        scrollTrigger:{
            delay: -2,
            trigger:".hero-container" ,
            scroller: "body",
            ease: "power4.inOut",
            start:"top -5%",
            end:"top -90%",
            scrub: 1
        }
    })
    .to("#right" ,{
        opacity: '0',
        x:200,
        delay: -3,
        scrollTrigger:{
            trigger:".hero-container" ,
            scroller: "body",
            ease: "power4.inOut",
            start:"top -5%",
            end:"top -90%",
            scrub: 1
        }
    })
    .to("#extra-text" ,{
        opacity: '0',
        delay: -3,
        scrollTrigger:{
            trigger:".hero-container" ,
            scroller: "body",
            ease: "power4.inOut",
            start:"top -5%",
            end:"top -90%",
            scrub: 1
        }
    })
}

function textReveal(){
    window.addEventListener("DOMContentLoaded", (event) => {
        let typeSplit = new SplitType("[text-split]", {
          types: "words, chars",
          tagName: "span"
        });

        $("[animate]").each(function (index) {
          let tl = gsap.timeline({paused:true});
          tl.from($(this).find(".word"), {
            opacity: 0,
            yPercent: 100,
            duration: 1.2,
            ease: "expo.inOut",
            stagger: { amount: 0.3 }
          });

          ScrollTrigger.create ({
            trigger: $(this),
            delay: -1,
            start: "top 80%",
            onEnter: () => tl.play()
          });
        });
       });
}
 function bgColor(){
 const sections = gsap.utils.toArray("#about");
 const container = document.querySelector('#work');

 const tl = gsap.timeline({

    scrollTrigger: {
         trigger: "#work",
         start: "top 1%",
         ease: "expo.inOut",
         delay: 1,
         scrub: true,
        //  markers: true,
         end: () => `+=${container.offsetWidth}`
     }
 })

  tl
 .to(sections, { duration: 1, xPercent: -100 * (sections.length - 1), ease: "none" })
 .to(container, { duration: 1, backgroundColor: "#968874", ease: "none" }, 0)
 }

 function titleFade(){
    let mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    gsap.to("#work-title", {
        opacity: 0.065,
        //delay: -0.5,
        //duration: 0.75,
         scrollTrigger: {
         scrub: true,
         trigger: '#work-title',
        start: "top top",
         scroller: "body",
         //markers: true
          }
     })
    });
 }
 
 gsap.registerPlugin(ScrollTrigger);
 gsap.config({ nullTargetWarn: false});
valueSetters();
xAxisScroll();
//aboutAnimation();
heroText();
// bgColor();
textReveal();
titleFade();



