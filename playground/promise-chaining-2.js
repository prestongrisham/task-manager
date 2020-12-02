require('../src/db/mongoose')
const Task = require('../src/models/task')

const taskId = '5fbdc79007a9cbe7b77c5cbc'

// Task.findByIdAndDelete(taskId).then((task) => {
//     console.log(task)
//     return Task.find({ completed: false })
// }).then((tasks) => {
//     console.log(tasks)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return { task, count }
}

deleteTaskAndCount(taskId).then(({ task, count }) => {
    console.log('count', count)
    console.log('task', task)
}).catch((e) => {
    console.log(e)
})