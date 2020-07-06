(function () {
    'use strict'

    var $cron = document.querySelector('#cron');
    var _timenow = 0
    var $playCron = document.querySelector('#playCron');
    var $stopCron = document.querySelector('#stopCron');
    var $pauseCron = document.querySelector('#pauseCron');

    $playCron.addEventListener('click', playCron);

    $stopCron.addEventListener('click', stopCron);

    $pauseCron.addEventListener('click', pauseCron);

    function cronometer() {
        var _formatedTime = ` <span class='text-muted text-right'>${_timenow}</span>`;
        _timenow++;
        $cron.innerHTML = _formatedTime;

        return _timenow
    }

    function fixDate(date) {
        return date < 10 ? `0${date}` : date;
    }

    function playCron() {
        setInterval(cronometer(), 100);
    }

    function stopCron() {
        setInterval(cronometer(), 100);
    }

    function pauseCron() {
        setInterval(cronometer(), 100);
    }

    $cron.innerHTML = _timenow;


})()