const User = require('../models/auth')

// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')


// const secret = 'mysecretsecret'

// async function saveDb(){
//     const data = JSON.stringify(data, null,2)
//     await fs.writeFile('./db.json', data)
// }

exports.register = async (username,email,password, repeatPassword) =>{
    if(password != repeatPassword){
        throw('Password do not match!')
    }
    const user = User.create({username,email, password})
    return user
}

//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt)

//     db.users.push({
//         username,
//         email,
//         password: hash
//     })
//     await saveDb()
// }