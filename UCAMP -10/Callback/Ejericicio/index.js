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

saludar(funcion_callback, "willy")
console.log('final')