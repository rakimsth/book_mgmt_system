const router = require('express').Router();

const bookRouter = require('../modules/book/book.routes.api');

router.use('/book', bookRouter);

module.exports = router;