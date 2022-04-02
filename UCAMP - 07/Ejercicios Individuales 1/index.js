let arr = [];

function Agregar_Object() {
    const tipo = document.getElementById('tipo').value;
    var mensaje = document.getElementById('mensaje').value;
    const json = '{"' + tipo + '":' + JSON.stringify(mensaje) + '}';
    const obj = JSON.parse(json);
    var repeat = false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < Object.getOwnPropertyNames(arr[i]).length; j++) {
            if (tipo == Object.getOwnPropertyNames(arr[i])[j]) {
                alert('Esta propiedad ya esta!!');
                repeat = true;
                break;
            }
        }
    }
    if (repeat == false)
        arr.push(obj);
}
