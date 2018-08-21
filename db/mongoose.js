const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('monodb://localhost:27017/TodoApp')

module.exports = {mongoose} // Property and variable have the same name