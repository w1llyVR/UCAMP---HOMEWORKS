
//Ejercicio 1 - Equipo
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 && i % 5)
            console.log('FizzBuzz');
        else if (i % 3)
            console.log('Fizz');
        else if (i % 5)
            console.log('Buzz');
        else
            console.log(i);
    }
}


//Ejericio 2 - Grupales

function contar(arr) {
    var Mexico = 0,
        Argentina = 0,
        Venezuela = 0,
        Peru = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].toUpperCase()) {
            case 'MEXICO':
                {
                    Mexico++;
                    break;
                }
            case 'ARGENTINA':
                {
                    Argentina++;
                    break;
                }
            case 'VENEZUELA':
                {
                    Venezuela++;
                    break;
                }
            case 'PERU':
                {
                    Peru++;
                    break;
                }
        }
    }

    console.log('Mexicanos: ', Mexico);
    console.log('Venezolanos: ', Venezuela);
    console.log('Argentinos: ', Argentina);
    console.log('Peruanos: ', Peru);
}
