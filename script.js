
let time = document.getElementsByClassName('time')[0];
let D = document.getElementsByClassName('date')[0];

let h
let m
let s
let date
let mnth
let day
let year
let session = 'AM'
const colon = ':'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const colours = ["red", "yellow", "orange", "skyblue", "blue", "purple", "green"];

getDate = () => {
    const Data = new Date();

    h = Data.getHours();
    m = Data.getMinutes();
    s = Data.getSeconds();
    date = Data.getDate();
    mnth = months[Data.getMonth()];
    day = days[Data.getDay()];
    year = Data.getFullYear();

    session = h>12 ? 'PM' : session;

    h = h>12 ? (h - 12): h;
    m = m>60 ? (m - 60): m;
    s = s>60 ? (s - 60): s;

    h = h>9 ? h: ('0' + h);
    m = m>9 ? m: ('0' + m);
    s = s>9 ? s: ('0' + s);

}

writeDate = () => {
    getDate();
    time.firstElementChild.innerHTML = h;
    document.getElementsByClassName('minSec')[0].innerHTML = m;
    document.getElementsByClassName('minSec')[1].innerHTML = s;
    time.lastElementChild.innerHTML = session;
    D.innerHTML = day + ', ' + date + '  ' + mnth + '  ' + year;

    time.firstElementChild.className = colours[h%7];
}

Blink = () => {
    let blinkk = document.getElementsByClassName('dots');
    blinkk[0].style.opacity = blinkk[0].style.opacity == 0 ? 1 : 0;
    blinkk[1].style.opacity = blinkk[1].style.opacity == 0 ? 1 : 0;
    
}

setTimeout(writeDate, 100);
setInterval(Blink, 1000);
setInterval(writeDate, 1000);
