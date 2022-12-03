const mongoose = require("mongoose");


const msgSchema = new mongoose.Schema({
  msg: {
    type: String,
  },
  hashedmsg: {
    type: String,
  },
});

const Message = mongoose.model("Message", msgSchema);
module.exports = Message;
