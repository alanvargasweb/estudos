(function(){
    

    

    function calcula() {

        var result = 0;
        var x = 0;
        var media = 0;
        

        while (typeof arguments[x] === 'number') {
            result += arguments[x];
            x++
        }

        media = result / arguments.length;
        return media;
    }

    var media1 = calcula(1,1,3, 'banana', 'macaco');
    var media2 = calcula(12,54,65);

    console.log('A media da soma dos numeros é ' + media1);
    console.log('A media da soma dos numeros é ' + media2)
})()

