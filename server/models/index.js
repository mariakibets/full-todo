const mongoose = require('mongoose');
const User = require('./User')
const {DB} = require('../configs/db');

mongoose.connect(DB)
.catch(err => {
    console.log('connect failed');
    process.exit(1);
})

module.exports = {
    User
}