gsap.set("#overlay", {y:"-100%"});
gsap.set("#socials a", {y:"100%"});
gsap.set("#overlay-bg", {y:"-100%"});

var tl = gsap.timeline({ paused: true });

  tl
  .to("#overlay", {
    y:"0",
    delay: -1,
    ease: "expo.inOut",
    duration: 2
  })

  .to("#socials a", {
    y:"0",
    delay: -1.5,
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

