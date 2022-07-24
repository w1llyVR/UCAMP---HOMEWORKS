console.log('hola')
const get_weather = async() => {
    const url = 'https://api.waqi.info/feed/peru/?token=e48043262862aad9819b930febf2c7440487030b';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
    setGraph(data.data);
}



const setGraph = (values) => {
    console.log(values);
    const labels = Object.keys(values.iaqi)
    const convertData = Object.values(values.iaqi).map(value => value.v)
    console.log(convertData)
    console.log(labels)

    const dataConfig = {
        labels: labels,
        datasets: [{
            label: 'my first dataSet',
            backgroundColor: 'rgb(255,99,132)',
            borderColor: 'rgb(255, 99, 132)',
            data: convertData
        }]
    }

    const config = {
        type: 'bar',
        data: dataConfig,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }

        }
    }

    const mychart = new Chart(
        document.querySelector('#mychart'),
        config
    )
}

get_weather();