const { Schema, model } = require("mongoose");

const StudentModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
});

module.exports = model("Student", StudentModel);
