const fetchData = require('../Utils/fetchData')
let API = "https://rickandmortyapi.com/api/character/"

// Utilizamos la funcion cerada para reutilizar la petición a al API
fetchData(API)
.then(data => {
    console.log(data.info.count)
    // Retornamos una nueva petición con los datos devueltos en la primera petición
    return fetchData(`${API}${data.results[0].id}`)
})
.then(data => {
    console.log(data.name)
    // Retornamos una nueva petición co los datos de la segunda petición
    return fetchData(data.origin.url)
})
.then(data => {
    // Imprimimos la dimención
    console.log(data.dimension)
})
.catch(err => console.error(err))