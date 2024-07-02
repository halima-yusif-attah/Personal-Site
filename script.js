const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let currentTime  = new Date();
let day = weekday[currentTime.getDay()];

document.getElementById("day").innerHTML = day;

function updateTime() {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    

    const currentLocalTime = hours + ':' + formattedMinutes + ':' + formattedSeconds; 
    document.getElementById("time").innerHTML = currentLocalTime;
}

setInterval( updateTime, 1000);




