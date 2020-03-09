const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    //properties
    name: { type: String, required: true },
    pages: String,
    desc: String,
    img_url: String,
    author: { type: String }
  },
  {
    collection: "book", //your collection name
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

module.exports = mongoose.model("Book", BookSchema);
