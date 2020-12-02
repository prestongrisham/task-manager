// CRUD 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectId } = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const databaseName = 'task-manager'


// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database!')
    }

    console.log("Connected successfully to server")
   
    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectId("5fbc70310c7c32b1eb7b364e")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({ completed: false }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({ age: 37 }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({ description: 'Make Dinner' }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })

    // client.close();
  })