const BookModel = require("./book.model");

class Book {
  constructor() {}
  // list all the datas from database
  async list() {
    return await BookModel.find();
  }

  //add data to the database
  create(payload) {
    if (!payload.img_url)
      payload.img_url = "https://disruptivetechasean.com/wp-content/themes/bcp/img/no-image.png";
    return BookModel.create(payload);
  }

  //get specific data from database
  async getById(id) {
    return await BookModel.findOne({ _id: id });
  }

  //update the specific data
  update(id, payload) {
    return BookModel.updateOne(
      { _id: id },
      {
        $set: {
          name: payload.name,
          pages: payload.pages,
          author: payload.author,
          desc: payload.desc,
          img_url: payload.img_url
        }
      }
    );
  }

  //remove the specific data
  remove(id) {
    return BookModel.findOneAndDelete({ _id: id });
  }
}

module.exports = new Book();
