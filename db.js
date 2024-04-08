const db = require("mongoose");

db.set("strictQuery", true);

db.Promise = global.Promise;
//"mongodb+srv://db_user_jdreau:uPkJveP3kIiKztBb@cluster0.jhiyg2v.mongodb.net/message_db",

async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
  });
}

module.exports = connect;
