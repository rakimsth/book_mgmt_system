const BookModel = require("./book.model");

class Book {
  constructor() {}
  // list all the datas from database
  list() {
    return BookModel.find();
  }

  //add data to the database
  create(payload) {
    return BookModel.create(payload);
  }

  //get specific data from database
  async getById(id) {
    return await BookModel.findOne({ _id: id });
  }

  //update the specific data
  update(id, payload) {
    return BookModel.findOneAndUpdate(
      { _id: id },
      { $set: { name: payload.name, pages: payload.pages, author: payload.author } }
    );
  }

  //remove the specific data
  remove(id) {
    return BookModel.findOneAndDelete({ _id: id });
  }
}

module.exports = new Book();
