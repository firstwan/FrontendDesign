const circle = document.querySelector('.circle');
const model = document.querySelector('.model');
const introLeft = document.querySelector('.intro-left');
const introRight = document.querySelector('.intro-right');


const tl = gsap.timeline();

tl.fromTo(introLeft, 2, {x: "-200%"}, { x: 0, ease: Elastic.easeOut.config(1,1)})
.fromTo(introRight, 2, {x: "220%"}, { x: 0, ease: Elastic.easeOut.config(1,1)}, "-=2")
.fromTo(circle, 2, { scale:0 }, { scale:1 , ease: Elastic.easeOut.config(1,1)}, "-=2")
.fromTo(model, 2, {opacity: 0}, { opacity:1 , ease: Power4.easeOut}, "-=1")

