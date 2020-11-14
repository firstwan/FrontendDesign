const intro = document.querySelector(".intro");
const slider = document.querySelector('.slider');
const introText = document.querySelectorAll('.text');
const nav = document.querySelector('nav');
const bigText = document.querySelector('.big-text');

const tl = gsap.timeline({defaults: {ease: Power1.easeOut }})

tl.to(introText, {y: "0%", duration: 1, stagger: 0.25});
tl.to(slider, {y: "-100%", duration: 1, delay: 0.5});
tl.to(intro, {y: "-100%", duration: 1}, "-=1");
tl.fromTo(nav, { opacity:0 }, { opacity:1, duration:1 });
tl.fromTo(bigText, { opacity:0 }, { opacity:1, duration:1 }, "-=1");
