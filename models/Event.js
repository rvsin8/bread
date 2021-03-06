const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  attendees: {
    type: Array,
    required: true,
  },
  active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    default: "double click to add a description"
  }
});

module.exports = Event = mongoose.model("Event", EventSchema);
