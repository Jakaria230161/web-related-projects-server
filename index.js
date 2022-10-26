const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

const course = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const courseItems = course.find((n) => n._id === id);
  res.send(courseItems);
});

app.listen(port, () => {
  console.log(`Server link ${port}`);
});
