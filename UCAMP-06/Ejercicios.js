//Ejercicios

//Ejercicio 1
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i++) {
    arr1[i] = (arr1[i] * 2);
}
console.log('Ejercicio 1');
console.log(arr1);

//Ejercicio 2
var nombres1 = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];
const nombreMayusculas = [];

nombres1.forEach(function(nombre) {
    nombreMayusculas.push(nombre.toUpperCase());
});

console.log('Ejercicio 2');
console.log(nombreMayusculas);

//Ejercicio 3
var nombreMinusculas = [];
nombreMinusculas = nombreMayusculas.map(function(nombre) {
    return nombre.toLowerCase();
});
console.log('Ejercicio 3');
console.log(nombreMinusculas);

//Ejercicio 4
var filtroNombres = nombres1.filter(function(nombre) {
    if (nombre == 'luis' || nombre == 'Luis')
        return nombre;
});
console.log(filtroNombres);

//Ejercicio 5
var numeros = [2, 4, 6, 8, 10];
let total = numeros.reduce(function(a, b) {
    return a + b;
});
console.log(total);
