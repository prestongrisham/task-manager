const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });


// new Task({ description: '' }).save().then((newTask) => {
//     console.log(newTask)
// }).catch((error) => {
//     console.log(error)
// })

// new User({ name: 'Alyssa', email: 'alyssa@gmail.com', password: 'tiger4usc' }).save().then((newUser) => {
//     console.log(newUser)
// }).catch ((error) => {
//     console.log(error)
// })

