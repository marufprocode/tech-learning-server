const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const courses = require("./data.json"); // Here You can put your json data.

app.get("/", (req, res) => {
  res.send("DevOne Server Running! Congrats");
});

app.get("/courses", (req, res) => {
  res.send(courses);    // Sending Your JSON Data to server
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);     // FOr Dynamic Data Loading
  console.log("Looking for req id:", id); 

  const courseDetail = courses.find(course => course.id === id) || {}; //Set an empty object if no data found on given id
  res.send(courseDetail);
});

app.listen(port, () => {
  console.log(`DevOne Server is running on port ${port}`);
});


module.exports = app;