const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const bookRoutes = require("./book");

router.use("/user", userRoutes);
router.use("/book", bookRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

  module.exports = router;