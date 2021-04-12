const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    description: String,
    infoLink: String,
    googleId: String,
    progressType: {type: String, default: "Percent"},
    numPages: Number,
    totalLocation: {type: Number, default: 0},
    sessions: [
        {
            type: Schema.Types.ObjectId,
            ref: "SessionData"
        }
    ]
});

const BookData = mongoose.model("BookData", BookSchema);

module.exports = BookData;