const Model = require("./model");

//mongodb+srv://db_user_jdreau:uPkJveP3kIiKztBb@cluster0.jhiyg2v.mongodb.net/test

console.log("[db] Conectada exitosamente");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: new RegExp(`^${filterUser}$`, "i") };
    }
    Model.find(filter)
      .populate("user")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }

        resolve(populated);
      });
  });
}

async function removeMessage(id) {
  return await Model.deleteOne({
    _id: id,
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
};
