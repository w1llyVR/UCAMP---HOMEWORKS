let canasta = [{
        nombre: "Manzana",
        tipo: "fruta",
        cantidad: 5
    },
    {
        nombre: "Melon",
        tipo: "fruta",
        cantidad: 15
    },
    {
        nombre: "Manzana",
        tipo: "fruta",
        cantidad: 25
    },
    {
        nombre: "Platano",
        tipo: "fruta",
        cantidad: 3
    }, {
        nombre: "Zanahoria",
        tipo: "verdura",
        cantidad: 54
    },
    {
        nombre: "Apio",
        tipo: "verdura",
        cantidad: 55
    },
    {
        nombre: "Espinaca",
        tipo: "verdura",
        cantidad: 20
    },
    {
        nombre: "Tomate",
        tipo: "verdura",
        cantidad: 5
    },
]


function fitrarCanasta(arreglo) {
    const canastaFilter = canasta.filter(function(item) {
        const list = document.getElementById('lista');
        list.innerHTML = '';
        arreglo.forEach(function(elemento, index) {
            let node = document.createElement('LI');
            if (elemento.tipo == 'verdura') {
                let textNodo = document.createTextNode(elemento.nombre + ' ' + elemento.tipo + ' ' + elemento.cantidad);
            }
        })
        if (item.tipo == "verdura") {
            return item;
        }
    })
    console.log('Canasta filtrada', canastaFilter);
}

function renderLista(algo, tipo) {
    const list = document.getElementById('lista');
    list.innerHTML = '';
    let arrTodo = [],
        arrVerdura = [],
        arrOtro = [];
    let index = algo.length - 1;
    algo.forEach(function(elemento) {

        if (tipo == 'fruta' && elemento.tipo == 'fruta') {
            arrOtro.push(elemento);
        } else if (tipo == 'verdura' && elemento.tipo == 'verdura') {
            arrVerdura.push(elemento);
        } else {
            arrTodo.push(elemento);
        }

    });

    if (tipo == 'verdura') {
        for (let i = 0; i < arrVerdura.length; i++) {
            let node = document.createElement('LI');
            let textNodo = document.createTextNode(arrVerdura[i].nombre + ' ' + arrVerdura[i].tipo + ' ' + arrVerdura[i].cantidad);
            console.log(arrVerdura[i]);
            node.setAttribute('id', index);
            node.appendChild(textNodo);
            document.getElementById('lista').appendChild(node);
            index++;
        }
    } else if (tipo == 'todo') {
        for (let i = 0; i < arrTodo.length; i++) {
            let node = document.createElement('LI');
            let textNodo = document.createTextNode(arrTodo[i].nombre + ' ' + arrTodo[i].tipo + ' ' + arrTodo[i].cantidad);
            console.log(arrTodo[i]);
            node.setAttribute('id', index);
            node.appendChild(textNodo);
            document.getElementById('lista').appendChild(node);
            index++;
        }
    } else {
        for (let i = 0; i < arrOtro.length; i++) {
            let node = document.createElement('LI');
            let textNodo = document.createTextNode(arrOtro[i].nombre + ' ' + arrOtro[i].tipo + ' ' + arrOtro[i].cantidad);
            console.log(arrOtro[i]);
            node.setAttribute('id', index);
            node.appendChild(textNodo);
            document.getElementById('lista').appendChild(node);
            index++;
        }
    }
}

function Listar() {
    console.log(typeof(canasta, document.getElementById('busqueda').value));
    renderLista(canasta, document.getElementById('busqueda').value);
}


//fitrarCanasta();

renderLista(canasta, 'fruta');
//clases

function agregarItem() {
    const name = document.getElementById('nombre').value;
    console.log(name);
    const type = document.getElementById('tipo').value;
    console.log(type);
    const cantidad = document.getElementById('cantidad').value;
    console.log(cantidad);
    canasta.push({ nombre: name, tipo: type, cantidad: cantidad });
    renderLista(canasta, type);
}
