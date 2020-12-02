require('../src/db/mongoose')
const User = require('../src/models/user')

const userID = '5fbda4dd5a3e63dda7643e03'

// User.findByIdAndUpdate(userID, { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments( { age })
    return count
}

updateAgeandCount(userID, 12).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
