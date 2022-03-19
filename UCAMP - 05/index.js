//RETO INDIVIDUAL 
function hablar_abuela() {
    var cont_adios = 0;
    while (cont_adios < 3) {
        var mensaje = prompt('Dile algo a tu abuela');
        if (mensaje == 'ADIÓS TQM')
            cont_adios++;
        if (cont_adios >= 3) break;
        alert('¡¿EH?! ¡NO TE ESCUCHO, HIJO!');
        mensaje = prompt('Responde a la abuela');
        if (mensaje == '    ')
            cont_adios++;
        if (cont_adios >= 3) break;
        var gritar = false;
        var cont = 0;
        for (let i = 0; i < mensaje.length; i++) {
            if (mensaje[i] >= 'A' && mensaje[i] <= 'Z')
                cont++;
        }
        if (cont > mensaje.length / 2)
            gritar = true;
        if (gritar == true) {
            alert('NO, NO DESDE 1983');
        }
    }
}

//hablar_abuela();



function ejecutar_calcualadora() {
    do {
        var numero_1 = prompt('Ingrese el primer numero');
        numero_1 = Number(numero_1);
    } while (isNaN(numero_1))

    do {
        var numero_2 = prompt('Ingrese el segundo numero');
        numero_2 = Number(numero_2);
    } while (isNaN(numero_2))

    var operacion;
    do {
        operacion = prompt('Ingrese la operacion', 'Suma, Resta, Multiplicación o División');
        operacion = operacion.toUpperCase();
    } while (operacion != 'SUMA' && operacion != 'RESTA' &&
        operacion != 'MULTIPLICACION' && operacion != 'DIVISION' &&
        operacion != 'MULTIPLICACIÓN' && operacion != 'DIVISIÓN')

    switch (operacion) {
        case 'SUMA':
            alert(`La suma es ${numero_1 + numero_2}`);
            break;
        case 'RESTA':
            alert(`La resta es ${numero_1 - numero_2}`);
            break;
        case 'MULTIPLICACION':
            alert(`La multiplicación es ${numero_1 * numero_2}`);
            break;
        default:
            alert(`La división es ${numero_1 / numero_2}`);
            break;
    }
}
ejecutar_calcualadora();
