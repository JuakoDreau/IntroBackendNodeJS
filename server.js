const express = require("express");
// const router = require("./components/message/network");
const db = require("./db");

const router = require("./network/routes");

db(
  "mongodb+srv://db_user_jdreau:uPkJveP3kIiKztBb@cluster0.jhiyg2v.mongodb.net/message_db"
);

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);
router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
