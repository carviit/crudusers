const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const conn = require("./db/conn");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const Employee = require("./models/Employee");
const employeesRoutes = require("./routes/employeeRoutes");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.redirect("/employees/all");
});

app.use(express.json());
app.use(express.static("public"));
app.use("/employees", employeesRoutes);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
