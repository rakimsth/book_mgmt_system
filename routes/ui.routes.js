const router = require("express").Router();
const BookRouter = require("../modules/book/book.routes.ui");


router.use("/", BookRouter);

module.exports = router;
