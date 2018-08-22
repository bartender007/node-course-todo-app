const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true
}

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp', options)

module.exports = {mongoose} // Property and variable have the same name