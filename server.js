const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./src/app/models");
const path = require("path");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "build")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
require("./src/app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get("/api", (req, res) => {
  db.query("SELECT * FROM tutorials", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
