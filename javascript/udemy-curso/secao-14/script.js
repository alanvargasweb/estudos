(function () {
    'use strict'

    var $timeNow = document.querySelector('#timeNow');

    function getCurrentTime() {
        var getTimeNow = new Date();
        var _hora = getTimeNow.getHours();
        var _minuto = getTimeNow.getMinutes();
        var _segundos = getTimeNow.getSeconds();


        var _dia = getTimeNow.getDate();
        var _mes = getTimeNow.getMonth();
        var _ano = getTimeNow.getFullYear();
        var _semana = getTimeNow.getDay();
        var _formatedTime = `${showWeakDay(_semana)} ${fixDate(_dia)} de ${showMonth(_mes)} de ${_ano} <span class='text-muted'>${fixDate(_hora)}:${fixDate(_minuto)}:${fixDate(_segundos)}</span class=''>`;
        
        $timeNow.innerHTML = _formatedTime;

        return _formatedTime
    }

    function fixDate(date) {
        return date < 10 ? `0${date}` : date;
    }

    function showWeakDay(weak) {
        switch (weak) {
            case 0:
                return 'Domingo';
                break;
            case 1:
                return 'Segunda-feira';
                break;
            case 2:
                return 'terça-feira';
                break;
            case 3:
                return 'Quarta-feira';
                break;
            case 4:
                return 'Quinta-feira';
                break;
            case 5:
                return 'Sexta-feira';
                break;
            case 6:
                return 'Sabado';
                break;
        }
    }

    function showMonth(mes) {
        switch (mes) {
            case 0:
                return 'Janeiro';
                break;
            case 1:
                return 'Fevereiro';
                break;
            case 2:
                return 'Março';
                break;
            case 3:
                return 'abril';
                break;
            case 4:
                return 'Maio';
                break;
            case 5:
                return 'Junho';
                break;
            case 6:
                return 'Julho';
                break;
            case 7:
                return 'Agosto';
                break;
            case 8:
                return 'Setembro';
                break;
            case 9:
                return 'Outubro';
                break;
            case 10:
                return 'Novembro';
                break;
            default:
                return 'Dezembro';

        }
    }
    setInterval(getCurrentTime, 1000)
    $timeNow.innerHTML = getCurrentTime();
    

})()