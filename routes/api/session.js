const router = require("express").Router();
const sessionController = require("../../controllers/sessionController");

router.route("/add")
    .post(sessionController.addSession);

    module.exports = router;