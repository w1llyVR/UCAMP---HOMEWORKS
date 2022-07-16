const Status = new Promise((resolve, reject) => {
    let valor = 5
    if (valor > 5)
        resolve('Es mayor a 5')
    else
        reject('Es menor a 5')
});

//Para utilizar una promesa se utiliza el then, catch.
// Status.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

//Otra forma
Status.then(console.log).catch(console.log)