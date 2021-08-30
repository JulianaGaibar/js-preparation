function sumaPares(){
	function obtenerPares(min, max){
       var numPares = [];
        for( var i = min; i <= max; i++){
            if (i % 2 == 0) {
                numPares.push(i);
            }
       }
       return numPares; 
    }

    function sumar(numeros) {
        var total= 0;
        numeros.forEach(element => {
            total += element;
        });
        return total;
    }

    var listaPares = obtenerPares(10,50);
    var total= sumar(listaPares);
    console.log(total);
}
sumaPares();