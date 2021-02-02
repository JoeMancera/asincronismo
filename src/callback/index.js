function sum(num1, num2) {
    return num1 +  num2
}

// se coloca por convención callback para identificar que tiene un callback y no otra cosa
function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(6,2, sum))

// test con tiempos

// Se crea l funcion que genera la espera, esta recibe como parámetro la 
// función que se denomína función de orden superior
function date(callback) {
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
}

// esta sería la función de orden superior que viene siendo llamada en la linea 20
// callback(date)
function printDate(dateNow) {
    console.log(dateNow)
}

// Aqui simplemente llama a la función date pasandole lafunción de orden superior
date(printDate);