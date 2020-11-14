const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const intro_text = intro.querySelector('h1');

const section = document.querySelector('section');
const section_text = section.querySelector('h1');


// Scrollmagic
const controller =  new ScrollMagic.Controller();

// scroolmagic scene
let scene = new ScrollMagic.Scene({
    duration: 91843, // the scene should last for a scroll distance of 100px
    //offset: 50, // start this scene after scrolling for 50px
    triggerElement: intro,
    triggerHook: 0
})
// .addIndicators()
.setPin(intro)
.addTo(controller);

//Text animation
let textAnim = gsap.fromTo(intro_text, 3, {opacity:1}, {opacity:0, ease: Power4.easeOut})

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

// Video Animation
let speed = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on('update', e => {
    // Scrollmagic event
    scrollPosition = e.scrollPos / 1000; // convert Milliseconds become second
    // console.log(e)
});

setInterval(() => {
    delay += (scrollPosition - delay) * speed;
    // console.log(scrollPosition, delay)

    video.currentTime = delay;
}, 40)
