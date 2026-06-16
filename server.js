const express = require("express");

const app = express();

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Mahathi"
  }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {

    console.log(req.body);

    if (!req.body || !req.body.name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
