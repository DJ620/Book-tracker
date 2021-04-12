const db = require("../models");

module.exports = {
    addSession: function(req, res) {
        db.SessionData.create(req.body.session)
            .then(({_id}) => db.BookData.findOneAndUpdate(req.body.bookId, { $push: {sessions: _id}}, {new: true}))
            .then(dbBook => {
                res.json(dbBook);
            })
            .catch(err => {
                res.json(err);
            })
    }
}