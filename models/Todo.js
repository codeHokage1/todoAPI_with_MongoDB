const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
})

const todoModel = mongoose.model('Todo', todoSchema);
module.exports = todoModel;