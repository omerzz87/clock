
function updateTime(){
    let date= new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;



document.getElementById('hourdiv').innerHTML = hours;
document.getElementById('mindiv').innerHTML = minutes;
document.getElementById('secdiv').innerHTML = seconds;
}

updateTime();
setInterval(updateTime, 1000);

let i=0
function cng_hour_color(){
    i= Math.random()*255
    myhourColor=`rgb(${i*10 %255},${i*20 % 255},${i*36 %255})`
    hourdiv.style.color = myhourColor

}
setInterval(cng_hour_color,1000)


let m=0
function cng_minute_color(){
    m= Math.random()*255
    myminColor=`rgb(${m*10 %255},${m*20 % 255},${m*36 %255})`
    mindiv.style.color = myminColor

}
setInterval(cng_minute_color,1000)

let g=0
function cng_sec_color(){
    g= Math.random()*255
    mysecColor=`rgb(${g*10 %255},${g*20 % 255},${g*36 %255})`
    secdiv.style.color = mysecColor

}
setInterval(cng_sec_color,1000)

let t=0
function cng_timebackground_color(){
    t= Math.random()*255
    mytimeColor=`rgb(${t*10 %255},${t*20 % 255},${t*36 %255})`
    time.style.backgroundColor = mytimeColor

}
setInterval(cng_timebackground_color,1000)