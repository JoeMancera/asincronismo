let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = "https://rickandmortyapi.com/api/character/"

function fetchData(url_api, callback) {
    let = xhttp = new XMLHttpRequest();
    // con el objeto xhttp creado, lo instanciamos con los valores de la petición
    xhttp.open('GET', url_api, true);
    // empezamos a "escuchar" el resultado de la petición
    xhttp.onreadystatechange = function (event) {
        // validamos que el estado de la petición esté terminada
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                // en el estandar se pasa primero el error, porque siempre algo falla y segundo el resultado
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function (error1, data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2);
        fetchData( data2.origin.url, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})

/*
       Ventajas

Soporte en varios navegadores
Universal
Funcion que ejecuta otra función

        Desventaja
Composisción tosca o un poco compleja, debería anidar caalback hell
los ifs se vuelven un poco complejos dependiendo la complejidad

*/