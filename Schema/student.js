const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: String,
        section: String,
        age: Number,
        gender: String
    }
)
module.exports = mongoose.model('Student', studentSchema);