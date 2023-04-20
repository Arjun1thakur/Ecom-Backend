let bcrypt = require('bcrypt')
let usersData=[
    {
        name:"mohan",
        email:"arjun@gmail.com",
        password:bcrypt.hashSync("Arjun",10)
    },
    {
        name:"Mohan",
        email:"Mohan@gmail.com",
        password:bcrypt.hashSync("Mohan",10)
    },
    {
        name:"Kaushal",
        email:"Kaushal@gmail.com",
        password:bcrypt.hashSync("Kaushal",10)
    }
]

module.exports=usersData