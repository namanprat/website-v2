const rotatingText = document.querySelectorAll("#union svg");
      const t = gsap.to(rotatingText, {
        rotation: -360,
        duration: 5,
        ease: "none",
        repeat: -1
      });
      t.iteration(1000);
      const speedFactor = 1;
      let tl;
      var rotate = gsap.timeline({
        scrollTrigger: {
          trigger: "main",
          start: "top",
          end: "+=10000",
          onUpdate: (self) => {
            tl && tl.kill();
            tl = gsap.timeline().to(t, {
              timeScale: speedFactor * self.direction,
              duration: 0.1
            }).to(t, {
              timeScale: self.direction,
              duration: 1
            }, "+=0.5");
          }
        }
      });

      let currentScroll = 0;
      let isScrollingDown = true;
      let tween = gsap.to(".marquee__part", {
        xPercent: -100,
        repeat: -1,
        duration: 30,
        ease: "linear",
      }).totalProgress(0.7);
      gsap.set("marquee__inner", {
        xPercent: -50
      });
      window.addEventListener("scroll", function() {
        if (window.pageYOffset > currentScroll) {
          isScrollingDown = true;
        } else {
          isScrollingDown = false;
        }
        gsap.to(tween, {
          timeScale: isScrollingDown ? 1 : -1,
        });
        currentScroll = window.pageYOffset;
      })