const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    description: String,
    infoLink: String,
    progressType: String,
    numPages: Number,
    totalLocation: Number,
    sessions: [{
        location: Number,
        percent: Number,
        page: Number,
        duration: Number,
        date: Date
    }]
});

const BookData = mongoose.model("BookData", BookSchema);

module.exports = BookData;