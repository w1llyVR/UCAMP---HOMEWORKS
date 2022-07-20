var todos = [];
for (let i = 0; i < 50; i++) todos.push([]);
var favoritos = [];

function mostrar(value, index) {
    let caja = document.getElementById('caja');
    caja.innerHTML += `
    <div class="card" style="width: 18rem; background-color: black; color:white">
        <img src="${value.thumbnail.path}.${value.thumbnail.extension}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title" style = "text-align: center">${value.name}</h5>
            <h6>Escenas</h6>
            <ol class="list-group list-group-numbered" id = "scene_${index}">

            </ol>
            <br>
            <a href="#" class="btn btn-primary" style = "text-align: center" onclick="marcar(${value.id})" id ="${value.id}">Favorito</a>
        </div>
    </div>
    `

    for (let i = 0; i < value.events.items.length; i++) {
        let escena = document.getElementById(`scene_${index}`)
        escena.innerHTML += `
        <li class="list-group-item" style="background-color: black; color: white">${value.events.items[i].name}</li>
    `
    }
}

const buscar = async() => {
    const buscado = document.getElementById('buscado')
    console.log(buscado.value)
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=16f80f25ae15efb899d565f9473d83f5&hash=dbbcf9ed64866bee7abf0ec46eb8b2ae&ts=1658181372&name=${buscado.value}`)
    const data = await res.json();
    const err = document.getElementById('error')
    console.log(data.data.count)
    if (data.data.count == 0) {
        console.log('No existe el nombre buscado')
        err.innerHTML = 'No existe el nombre buscado'
    } else {
        err.innerHTML = ''
        console.log('first', data)
        const caja = document.getElementById('caja');
        caja.innerHTML = `
            <div class="card" style="width: 18rem; background-color: black; color:white">
            <img src="${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" style = "text-align: center">${data.data.results[0].name}</h5>
                <h6>Escenas</h6>
                <ol class="list-group list-group-numbered" id = "scene_1">

                </ol>
                <br>
                <a href="#" class="btn btn-primary" style = "text-align: center"  onclick="marcar(${data.data.results[0].id})" id = "${data.data.results[0].id}">Favorito</a>
            </div>
        </div>
            `
        for (let i = 0; i < data.data.results[0].events.items.length; i++) {
            let escena = document.getElementById(`scene_1`)
            escena.innerHTML += `
                <li class="list-group-item" style="background-color: black; color: white">${data.data.results[0].events.items[i].name}</li>
            `
        }
    }
    console.log(data);
}

const get_heros = async() => {
    const res = await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=16f80f25ae15efb899d565f9473d83f5&hash=dbbcf9ed64866bee7abf0ec46eb8b2ae&ts=1658181372&limit=50");
    const data = await res.json();
    data.data.results[0].map
    console.log(data.data.results);

    data.data.results.map(mostrar)
}

const marcar = async(index) => {
    const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${index}?apikey=16f80f25ae15efb899d565f9473d83f5&hash=dbbcf9ed64866bee7abf0ec46eb8b2ae&ts=1658181372`)
    const data = await res.json();
    const cambiar = document.getElementById(`${index}`)
    console.log(data)
    if (cambiar.innerHTML == 'Favorito') {
        favoritos.push(data);
        cambiar.innerHTML = 'X'
    } else {
        for (let i = 0; i < favoritos.length; i++)
            if (favoritos[i].data.results[0].id == index) {
                favoritos.splice(i, 1);
            }
        cambiar.innerHTML = 'Favorito'
    }
    const favs = document.getElementById('favoritos')
    if (favoritos.length == 0) {
        favs.innerHTML = `
            <h1 style="text-align:center;">OPS! no tienes ninguno en la lista, por que no agregas alguno?</h1>
        `
    } else {
        favs.innerHTML = ``;
        for (let i = 0; i < favoritos.length; i++) {
            favs.innerHTML += `
            <div class="card" style="width: 18rem; background-color: black; color:white">
            <img src="${favoritos[i].data.results[0].thumbnail.path}.${favoritos[i].data.results[0].thumbnail.extension}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" style = "text-align: center">${favoritos[i].data.results[0].name}</h5>
                <h6>Escenas</h6>
                <ol class="list-group list-group-numbered" id = "scene__${i}">

            </ol>
            <br>
        </div>
    </div>
        `

            let escena = document.getElementById(`scene__${i}`)
            for (let j = 0; j < favoritos[i].data.results[0].events.items.length; j++) {
                escena.innerHTML += `
            <li class="list-group-item" style="background-color: black; color: white">${favoritos[i].data.results[0].events.items[j].name}</li>
        `
            }

        }
    }


}

get_heros();