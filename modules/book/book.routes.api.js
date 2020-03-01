const router = require("express").Router();
const BookController = require("./book.controller");

//list all book
router.get("/", (req, res, next) => {
  BookController.list()
    .then(d => res.json(d))
    .catch(error => next(error));
});

//Add new Book
// /api/v1/book/
router.post("/", (req, res, next) => {
  //call the controller create function
  BookController.create(req.body)
    // show the return data from controller in JSON format
    .then(d => res.json(d))
    // incase of error catch that error(e) and throw it to the user
    .catch(e => next(e));
});

//Update the existing book details
router.put("/:id", (req, res, next) => {
  BookController.update(req.params.id, req.body)
    .then(d => res.json(d))
    .catch(e => next(e));
});

//Delete the book from the inventory
router.delete("/:id", (req, res, next) => {
  BookController.remove(req.params.id)
    .then(d => res.json(d))
    .catch(e => next(e));
});

module.exports = router;
