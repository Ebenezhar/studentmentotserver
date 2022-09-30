const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require('cors');
const link = process.env.orgin;
app.use(cors({ link }));
const dotenv = require('dotenv').config();
const Teacher = require('./Schema/teacher');
const Student = require('./Schema/student');
const URL = process.env.DB;
mongoose.connect(URL);
const ObjectId = require('mongoose').Types.ObjectId;


// Authenticate


//1. Post Teacher C
app.post('/postTeacher', async (req, res) => {
    try {
        const response = await Teacher.create(req.body);
        if (response._id) {
            res.status(200).send({ message: "Teachers details added Successfully" })
        }
    } catch (error) {
        console.log(error);
    }
})

//2.Read Teacher R
app.get('/ReadTeachers', async (req, res) => {
    try {
        const result = await Teacher.find();
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
    }
});


//3.Update Teacher U
app.put('/updateTeacher', async (req, res) => {
    try {
        const result = await Teacher.updateOne({ _id: new ObjectId(req.body._id) },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    subject: req.body.subject,
                    department: req.body.department,
                    age: req.body.age,
                    salary: req.body.salary
                }
            });
        if (result.modifiedCount) {
            res.status(200).send({ message: "Updated successfully" });
        }
    } catch (error) {
        console.log(error);
    }
})

//4. Delete Teacher D
app.delete('/deleteTeacher/:id', async (req, res) => {
    try {
        const response = await Teacher.deleteOne({ _id: new ObjectId(req.params.id) });
        console.log(response);
        if (response.acknowledged) {
            res.status(200).send({ message: 'Deleted Successfully' });
        }
    } catch (error) {
        console.log(error);
    }
})

//5. Post Student C
app.post('/postStudent', async (req, res) => {
    try {
        const response = await Student.create(req.body);
        if (response._id) {
            res.status(200).send({ message: "Student details added Successfully" })
        }
    } catch (error) {
        console.log(error);
    }
})

//6. Read Student R
app.get('/readStudents', async (req, res) => {
    try {
        const result = await Student.find();
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
    }
});

//7.Update Student U
app.put('/updateStudent', async (req, res) => {
    try {
        const result = await Student.updateOne({ _id: new ObjectId(req.body._id) },
            {
                $set: {
                    name: req.body.name,
                    section: req.body.section,
                    age: req.body.age,
                    gender: req.body.gender
                }
            });
        if (result.modifiedCount) {
            res.status(200).send({ message: "Updated successfully" });
        }
    } catch (error) {
        console.log(error);
    }
})

//8. Delete Student D
app.delete('/deleteStudent/:id', async (req, res) => {
    try {
        const response = await Student.deleteOne({ _id: new ObjectId(req.params.id) });
        console.log(response);
        if (response.acknowledged) {
            res.status(200).send({ message: 'Deleted Successfully' });
        }
    } catch (error) {
        console.log(error);
    }
})

app.listen(process.env.PORT || 3001)