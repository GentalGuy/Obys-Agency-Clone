function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: true,
    getDirection: true,
		smartphone: {
			smooth: true,
      getDirection:true,
		},
    mobile:{
      smooth: true,
      getDirection:true,
    },
		tablet: {
			smooth: true,
      getDirection:true,
      breakpoints: 0,
    }
  });

  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}


// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5Timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          grow++;
          h5Timer.innerHTML = grow++;
        } else {
          h5Timer.innerHTML = grow;
        }
      }, 30);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
  tl.from(
    "#hero1,#page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}
function cursorAnimation() {
  let cursorRounded = document.querySelector("#crsr");
  document.addEventListener("mousemove", function (dets) {
    cursorRounded.style.left = `${dets.clientX}px`;
    cursorRounded.style.top = `${dets.clientY}px`;
    // gsap.to('#crsr',{
    //   left:dets.x,
    //   top:dets.y,
    // })
    // cursorRounded.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
  });
  let navLinks = document.querySelectorAll("#nav-part2");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursorRounded.style.width = "4vw";
      cursorRounded.style.height = "4vw";
    });

    link.addEventListener("mouseleave", () => {
      cursorRounded.style.width = "2.5vw";
      cursorRounded.style.height = "2.5vw";
    });
  });
  Shery.makeMagnet("#nav-part2 h4");
  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container #video1");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to("#crsr", {
        opacity: 0,
      });
      gsap.to("#video-cursor", {
        left: dets.x - 500,
        y: dets.y - 280,
      });
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to("#crsr", {
      opacity: 1,
    });
    gsap.to("#video-cursor", {
      left: "70%",
      top: "-15%",
    });
  });

  var flag = 0;

  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-pause-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 0.5,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 1,
      });
      flag = 0;
    }
  });
}

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749932567818 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.31, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.53, range: [0, 10] },
      metaball: { value: 0.4, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.4, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}
function flag() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y,
    });
  });
  document.querySelector("#hero3").addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1,
    });
    gsap.to("#crsr", {
      opacity: 0,
    });
  });
  document.querySelector("#hero3").addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0,
    });
    gsap.to("#crsr", {
      opacity: 1,
    });
  });
}

locomotiveAnimation();
loadingAnimation();
cursorAnimation();
sheryAnimation();

flag();

function footerAnimation() {
  var clutter = "";
  var clutter2 = "";
  document
    .querySelector("#h1Footer")
    .textContent.split("")
    .forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
  document.querySelector("#h1Footer").innerHTML = clutter;
  document
    .querySelector("#h2Footer")
    .textContent.split("")
    .forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`;
    });
  document.querySelector("#h2Footer").innerHTML = clutter2;

  document
    .querySelector(".footer-heading").addEventListener("mouseenter", function () {
      gsap.to("#h1Footer span", {
        opacity: 0,
        stagger: 0.05,
      });
      gsap.to("#h2Footer span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1,
      });
    });
  document
    .querySelector(".footer-heading")
    .addEventListener("mouseleave", function () {
      gsap.to("#h2Footer span", {
        opacity: 0,
        stagger: 0.05,
      });
      gsap.to("#h1Footer span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
      });

    });
}
footerAnimation();
