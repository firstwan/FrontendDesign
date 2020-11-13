// Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase-btn');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


// Moving event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /30;
    let yAxis = (window.innerHeight / 2 - e.pageY) /30;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});




// Animate In
container.addEventListener("mouseenter", (e) =>{
    card.style.transition = 'all 0.2s ease';

    // Popout
    title.style.transform = 'translateZ(125px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(45deg) translate(10%, 15%)';
    description.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(75px)';
    purchase.style.transform = 'translateZ(50px)';
});


// Animate Out
container.addEventListener("mouseleave", (e) =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    // Popback
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0) rotateZ(0deg) translate(0, 0)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
});