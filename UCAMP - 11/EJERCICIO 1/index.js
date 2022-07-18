const clima = async() => {
    const ciudad_buscada = document.getElementById('ciudad_ingresada')
    console.log(ciudad_ingresada.value)
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad_ingresada.value}&appid=616629f9acdc3b22b8b09553e632e5da`
    const res = await fetch(URL);
    const data = await res.json();
    const temp = document.getElementById('temp')
    temp.innerHTML = `Temperatura: ${data.main.temp}`
    console.log(data);
}