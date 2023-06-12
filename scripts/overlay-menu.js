function valueSet() {
  gsap.set("#overlay", {y:"-105%"});
  gsap.set(".menu-item a", {y:"100%" });
  gsap.set(".social a", {y:"100%" , opacity:0});
  gsap.set("#overlay-bg", {y:"-100%", opacity:0});
}

function overlayAnimation() {
  var tl = gsap.timeline({paused: true, reversed:true});

  tl
  .to("#overlay", {
    y:"0",
    ease: "power4.inOut",
    duration: 1.75,
  })

  .to(".menu-item a , .social a", {
    y: "0",
    opacity: 1,
    delay: -1,
    duration: 1.75,
    ease: "power4.inOut",
    stagger: 0.15,
  })

  $(".menu-close, .menu-open").click (function() {
 tl.reversed() ? tl.play() : tl.reverse();
  })
}

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false});
valueSet();
overlayAnimation();
