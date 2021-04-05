let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Convertimos a estandar ecmascript 6
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        // con el objeto xhttp creado, lo instanciamos con los valores de la petición
        xhttp.open('GET', url_api, true);
        // empezamos a "escuchar" el resultado de la petición
        xhttp.onreadystatechange = (() => {
            // validamos que el estado de la petición esté terminada
            if(xhttp.readyState === 4){

                // Hacemos un IF ternario
                (xhttp.status === 200) 
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ', url_api))
            }
        })
        xhttp.send();
    } )
}

module.exports = fetchData