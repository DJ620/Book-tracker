const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  location: Number,
  percent: Number,
  page: Number,
  notes: String,
  duration: Number,
  date: Date,
});

const SessionData = mongoose.model("SessionData", SessionSchema);

module.exports = SessionData;
