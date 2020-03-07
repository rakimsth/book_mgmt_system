const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("book/index", {
    title: "Book List"
  });
});

module.exports = router;
