const heroMarqueeContent = document.querySelector('.heroMarquee-content');
let heroMarquee = heroMarqueeContent.cloneNode(true);
heroMarqueeContent.parentElement.append(heroMarquee);
let heroMarqueeTween;

function heroMarqueeloop() {
  // let prog = heroMarqueeTween ? tween.prog() : 0;
  // heroMarqueeTween && tween.prog(0).kill();
  let heroMarqueeGap = parseInt(getComputedStyle(heroMarqueeContent).gap);
  let heroMarqueeWidth = parseInt(getComputedStyle(heroMarqueeContent).width);
  let gapPercent = (heroMarqueeGap / heroMarqueeWidth) * 100;
  let dist = gapPercent + 100;

  heroMarqueeTween = gsap.fromTo('.heroMarquee-content',
      { xPercent: 0 },
      {
        xPercent: -dist,
        duration: 10,
        ease: "none",
        repeat: -1
      }
  );
}
heroMarqueeloop();
window.addEventListener("resize",heroMarqueeloop);
gsap.config({ nullTargetWarn: false});