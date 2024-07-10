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
  let navLinks = document.querySelectorAll('#nav-part2');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursorRounded.style.width = '4vw';
      cursorRounded.style.height = '4vw';
    });

    link.addEventListener('mouseleave', () => {
      cursorRounded.style.width = '2.5vw';
      cursorRounded.style.height = '2.5vw';
    });
  });
  Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation();
cursorAnimation();
