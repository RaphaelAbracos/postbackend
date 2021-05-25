const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

mongoose.connect(
  "mongodb://testeEstagio:testeEstagio@cluster0-shard-00-00.zd4jm.mongodb.net:27017,cluster0-shard-00-01.zd4jm.mongodb.net:27017,cluster0-shard-00-02.zd4jm.mongodb.net:27017/testeEstagioDB?ssl=true&replicaSet=atlas-ecnihx-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const app = express();



// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/post"));

app.listen(3000, () => console.log("Server started on port: 3000"));
