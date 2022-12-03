const Message = require("../models/msgModel");
var crypto = require("crypto");

exports.createHash = async (req, res) => {
  try {
    var input = req.body.msg;
    var hash = crypto.createHash("sha256").update(input).digest("hex");
    const newMessage = await Message.create({ msg: input, hashedmsg: hash });
    res.status(201).json({
      status: "success",
      hashedMessage: hash,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.getMessage = async (req, res) => {
  try {
    console.log("sa");
    const msg = await Message.find({
      hashedmsg: { $in: [req.params.hashed] },
    });
    res.status(200).json({
      status: "success",
      hashedMessage: msg[0].msg,
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};
