const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/book", bookRoutes);

module.exports = router;
