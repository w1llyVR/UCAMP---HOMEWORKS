console.log('hola')

const login = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;

    let cont1 = 0,
        cont2 = 0,
        cont3 = 0;
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] <= 'z' && nombre[i] >= 'a') cont1++;
    }
    for (let i = 0; i < apellido.length; i++) {
        if (apellido[i] <= 'z' && apellido[i] >= 'a') cont2++;
    }
    for (let i = 0; i < edad.length; i++) {
        if (edad[i] >= '9' || edad[i] <= '0') cont3++;
    }
    const validado = document.getElementById('valido')
    if (cont1 >= 3 && cont2 >= 3 && cont3 == 0)
        validado.innerHTML = `Válido`
    else
        validado.innerHTML = `No Válido`
}