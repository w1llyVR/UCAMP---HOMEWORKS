var arr = [];

function agregarLibro() {
    let nombre = document.getElementById('nombre').value;
    let autor = document.getElementById('autor').value;
    arr.push({ "nombre": nombre, "autor": autor });
    imprimirLibro();
}

function imprimirLibro() {
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    arr.forEach(function(element, index) {
        let node = document.createElement('li');
        let textNode = document.createTextNode("nombre: " + element.nombre + " autor: " + element.autor);
        node.setAttribute('id', index);
        node.setAttribute('class', "list-group-item");
        node.appendChild(textNode);
        lista.append(node);
    })
    document.getElementById('formulario').reset();
}
