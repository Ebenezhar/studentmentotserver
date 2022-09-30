const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    name: String,
    subject: String,
    department: String,
    age: Number,
    salary: Number
});

module.exports = mongoose.model("Teacher", teacherSchema);
