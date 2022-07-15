import { my_function } from './dbd.js'


const suma = (a, b) => {
    return a + b;
}

const funcion_principal = (callback, x, y) => {
    if (isNaN(x || y))
        console.log('no es un numero')
    else
        console.log(callback(x, y));
}

funcion_principal((a, b) => { return a + b }, 2, 2);
funcion_principal(suma, 3, 5);

console.log(my_function(6, 8));