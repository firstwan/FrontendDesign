let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 5);

const countdown = () => {
    const now = new Date().getTime();    
    const gap = futureDate.getTime() - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    // Count down
    const textDay = Math.floor(gap /day);
    const textHour = Math.floor((gap % day) /hour);
    const textMinute = Math.floor((gap % hour) /minute);
    const textSecond = Math.floor((gap % minute) /second);


    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;
}

setInterval(countdown, 1000);

