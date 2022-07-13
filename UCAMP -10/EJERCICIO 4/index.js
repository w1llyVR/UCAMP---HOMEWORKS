console.log('hola')

let buscarFrase = async() => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    //console.log(res)
    const frase = await res.json();
    console.log(frase.value)
    let lista = document.getElementById('lista');
    lista.innerHTML += `
    <div class="card">
        <div class="card-content">
          <div class="content">
            ${frase.value}
          </div>
        </div>
    </div>
        `
}


const btn = document.querySelector("#no-se");
btn.addEventListener('click', () => {
    buscarFrase();
})

function agregar() {
    buscarFrase();
}

// const fr = await buscarFrase()
//console.log(buscarFrase());