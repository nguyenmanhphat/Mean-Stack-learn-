const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://admin:admin@cluster0.aabbja5.mongodb.net/employee_db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = ()=>{
    return mongoose.connect(dbUri)
}