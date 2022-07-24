const users = require('./data.js');



const buscar = async(name) => {
    const user = await users.find(u => u.name === name)
    if (name > users.length)
        throw new Error('El usuario no se ha encontrado')
    else if (!user.phone)
        throw new Error('El usuario no tiene telefono')
    else
        console.log('El usuario es', user);
}

buscar('Marcus')