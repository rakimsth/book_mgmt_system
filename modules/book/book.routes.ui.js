const router = require("express").Router();
const BookController = require("./book.controller");
router.get("/", async (req, res, next) => {
  let bookList = await BookController.list();
  res.render("book/index", {
    title: "Book List",
    bookList
  });
});

router.get("/add", async (req, res, next) => {
  res.render("book/add", {
    title: "Add New Book"
  });
});

router.get("/book/:id", async (req, res, next) => {
  let data = await BookController.getById(req.params.id);
  res.render("book/edit", {
    title: "Edit Book",
    data
  });
});
module.exports = router;
