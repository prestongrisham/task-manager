const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

const multer = require('multer')
const upload = multer({
    dest: 'images'
})

const errorMiddleware = (req, res, next) => {
    throw new Error('From my middleware')
}

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const task = require('./models/task')
const user = require('./models/user')

const main = async () => {
    


}

main()
