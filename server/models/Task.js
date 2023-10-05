const mongoose = require('mongoose');
const { Schema } = mongoose;

const tackSchema = new Schema ({
    author,
    body,
    status,
    createdAt,
    deadline
})

const Task = mongoose.model('task', tackSchema);

module.exports = Task