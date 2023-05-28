gsap.set("#overlay", {y:"-100%"});
gsap.set("#socials a", {y:"100%"});
gsap.set("#overlay-bg", {y:"-100%", opacity:0});

var tl = gsap.timeline({ paused: true });

  tl
  .to("#overlay, #overlay-bg", {
    y:"0",
    ease: "power4.inOut",
    duration: 2
  })

  .to("#overlay-bg", {
    opacity: 1,
    duration: 1.5,
    delay: -1,
    // delay: -2,
    ease: "power4.inOut",
  })

  .to("#socials a", {
    y:"0",
    delay: -2.5,
    ease: "circ.inOut",
    stagger: 0.1,
    duration: 1.75,
  })

  // .to(".star", {
  //   rotation: 360,
  //   delay: -10,
  //   transformOrigin: "center",
  //   ease: "none", 
  //   duration: 3,
  //   repeat: -1
  // })

  $(".menu-open, .menu-close").click (function() {
 tl.reversed() ? tl.play() : tl.reverse();
  })

