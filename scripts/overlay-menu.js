function valueSet() {
  gsap.set("#overlay", {y:"-105%"});
  gsap.set(".menu-item a", {y:"100%" });
  gsap.set("#overlay-bottom", {opacity:0});
  gsap.set("#overlay-bg", {y:"-100%", opacity:0});
  gsap.set("#nav-cluster a", {autoAlpha:1});
  let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");
  gsap.set(spanBefore, {background: "#000"});
}

function navScroll(){
  let mm = gsap.matchMedia();
mm.add("(min-width: 768px)", () => {
  gsap.to("#nav-cluster a", {
    autoAlpha:0,
    ease: "power4.inOut",
    scrollTrigger: {
      scrub: 2,
      trigger: '#nav-cluster',
     start: "top",
    scroller: "body",
       }
   })
  });
}

function navFade(){
  let mm = gsap.matchMedia();
mm.add("(max-width: 768px)", () => {
  gsap.to("#nav-cluster a", {
    ease: "power4.inOut",
    autoAlpha:0,
   })
  });
}
function buttonAnimation () {
  overlayAnimation();
  var tl = gsap.timeline({paused: true, reversed:true});
  const toggleBtn = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");
  toggleBtn.onclick = function (e) {
    hamburger.classList.toggle("active");
    tl.reversed(!tl.reversed());
  };
};

function overlayAnimation() {
  var tl = gsap.timeline({paused: true, reversed:true});

  tl
  .add('start')
  .to("#nav-cluster a", {
    ease: "power4.inOut",
    duration: 1,
    stagger: 0.01,
    autoAlpha:0,
  }, "<")

   .to("#overlay", {
     y:"0",
     ease: "power4.inOut",
     duration: 1.35,
   }, "<")


  .to(".menu-item a , #overlay-bottom", {
    y: "0",
    opacity: 1,
    duration: 2,
    ease: "power4.inOut",
    stagger: 0.15,
  }, "<")

  // .to("#nav-home , #menu", {
  //   color:'var(--black)',
  // }, 'start')

  $(".menu-close, .menu-open").click (function() {
 tl.reversed() ? tl.play() : tl.reverse();
  })
}

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false});
buttonAnimation ();
navScroll();
navFade();
valueSet();
// overlayAnimation();
