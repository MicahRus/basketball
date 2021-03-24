const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// const cors = require("cors");

const model = require("./model");

// app.use(cors());

// const whitelist = ["*", "http://localhost:3000", "http://192.168.0.11:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.get("/getData", (req, res) => {
  console.log("hello world");
  model
    .getData()

    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
