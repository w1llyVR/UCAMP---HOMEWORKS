console.log('hola')

const graficar = async() => {
    const res = await fetch('https://api.waqi.info/feed/here/?token=e48043262862aad9819b930febf2c7440487030b');
    const data = await res.json();
    setGraph(data.data)
}

const setGraph = (values) => {
    const labels = Object.keys(values.iaqi)
    const ConvertData = Object.values(values.iaqi).map((v) => { return v.v })
    console.log(labels)
    console.log(ConvertData)

    const dataConfig = {
        labels: labels,
        datasets: [{
            label: 'Primer Grafico',
            data: ConvertData,
            backgroundColor: ['#13c87c', '#9e3ccc', '#673ceb', '#85eca1', '#df456d', '#2dbec3', '#66994d'],
            hoverOffset: 4
        }]
    }

    const config1 = {
        type: 'doughnut',
        data: dataConfig
    }

    const newChart1 = new Chart(document.querySelector('#mychart1'), config1);


    const dataConfig2 = {
        labels: labels,
        datasets: [{
            label: 'Segundo Grafico',
            data: ConvertData,
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    }

    const config2 = {
        type: 'radar',
        data: dataConfig2,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'red'
                    },
                    grid: {
                        color: 'red'
                    }
                }
            }
        }
    }

    const newChart2 = new Chart(document.querySelector('#mychart2'), config2)

    const dataConfig3 = {
        labels: labels,
        datasets: [{
            label: 'Tercer Grafico',
            data: ConvertData,
            backgroundColor: ['#478cfc', '#9f04ee', '#fe03d6', '#81ebd3', '#a5b9fc', '#152ba5', '#ecff02']
        }]
    }

    const config3 = {
        type: 'polarArea',
        data: dataConfig3,
        options: {
            scales: {
                r: {
                    grid: {
                        color: 'red'
                    }
                }
            }
        }
    };

    const newChart3 = new Chart(document.querySelector('#mychart3'), config3)
}
graficar();