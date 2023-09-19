var future = new Date('sep 19, 2023 02:00:00').getTime();
const timer = document.getElementById('timer');
const content = document.querySelector('.content');

var x = setInterval(function() {
    var now = new Date().getTime();
   
    var distance = future - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60 ));
    var secs = Math.floor(distance % (1000 * 60) / (1000));

    days = (days < 10) ? '00' + days : days;
    hours = (hours < 10) ? '0' + hours : hours;
    min = (min < 10) ? '0' + min : min;
    secs = (secs < 10) ? '0' + secs : secs;

    document.getElementById('timer').innerHTML = `${days} Days : ${hours} Hours : ${min} Mins : ${secs} Secs`;

    if(distance <= 0){
        clearInterval(x)
        timer.innerHTML = `Am done counting :Happy Birth day`
            timer.classList.add('show');
            content.classList.add('start');
    }
}, 1000);