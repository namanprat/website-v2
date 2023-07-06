const stripeContent = document.querySelector('.stripe-content');

let stripe = stripeContent.cloneNode(true);
stripeContent.parentElement.append(stripe);

let stripeTween;

function stripeloop() {
  // let prog = stripeTween ? tween.prog() : 0;
  // stripeTween && tween.prog(0).kill();
  let stripeGap = parseInt(getComputedStyle(stripeContent).gap);
  let stripeWidth = parseInt(getComputedStyle(stripeContent).width);
  let gapPercent = (stripeGap / stripeWidth) * 100;
  let dist = gapPercent + 100;

  stripeTween = gsap.fromTo('.stripe-content',
      { xPercent: 0 },
      {
        xPercent: -dist,
        duration: 10,
        ease: "none",
        repeat: -1
      }
  );
}
stripeloop();
window.addEventListener("resize",stripeloop);
gsap.config({ nullTargetWarn: false});