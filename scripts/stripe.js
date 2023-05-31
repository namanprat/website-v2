const marqueeContent = document.querySelector('.marquee-content');

let marquee = marqueeContent.cloneNode(true);
marqueeContent.parentElement.append(marquee);

let marqueeTween;

function loop() {
  let marqueeGap = parseInt(getComputedStyle(marqueeContent).gap);
  let marqueeWidth = parseInt(getComputedStyle(marqueeContent).width);
  let gapPercent = (marqueeGap / marqueeWidth) * 100;
  let dist = gapPercent + 100;

  marqueeTween = gsap.fromTo('.marquee-content',
      { xPercent: 0 },
      {
        xPercent: -dist,
        duration: 20,
        ease: "none",
        repeat: -1
      }
  );
}
loop();