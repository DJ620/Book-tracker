const db = require("../models");

module.exports = {
    addBook: function(req, res) {
        db.BookData.create(req.body.bookData)
            .then(({_id}) => db.User.findOneAndUpdate(req.body.userId, { $push: {books: _id}}, {new: true}))
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            })
    },

    getAllBooks: function(req, res) {
        db.User.findOne({_id: req.params.id})
            .populate("books")
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            })
    },

    getSingleBook: function(req, res) {
        db.BookData.findOne({_id: req.params.id})
            .then(dbBook => {
                res.json(dbBook);
            })
            .catch(err => {
                res.json(err);
            });
    },

    deleteBook: function(req, res) {
        console.log("Getting here")
        db.BookData.deleteOne({_id: req.params.bookId})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    }
}