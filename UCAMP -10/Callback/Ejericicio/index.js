console.log('hola')

function funcion_callback(palabra) {
    console.log(palabra);
}


const saludar = (funcion_callback, palabra) => {
    palabra = palabra.toLocaleUpperCase();
    funcion_callback(palabra);
    setTimeout(() => {
        console.log(palabra)
    }, 4000)
}

// saludar(funcion_callback, "willy")
// console.log('final')


const saludar2 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve('Esto es un resolve') //Funciona como retun es decir acaba la funcion
        reject('Esto es un reject') //Como "error"

    }, 4000)
});



console.log('dfdf', 'dfdfd', 12, "")

console.log(saludar2);
saludar2.then((response) => {
    console.log(response)
});