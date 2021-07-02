"use strict";
const _comment = require("../models/comment.model");
const book = require("../models/book.model");

exports.mycomment = async (req, res) => {
  if (
    typeof req.body.id_user === "undefined" ||
    typeof req.body.id_book === "undefined" ||
    typeof req.body.name === "undefined" ||
    typeof req.body.comment === "undefined"
  ) {
    res.status(422).json({ msg: "Invalid data" });
    return;
  }

  let { id_user, id_book, name, comment } = req.body;
  let bookFind;
  try {
    bookFind = await book.findById(id_book);
  } catch (err) {
    res.status(422).json({ msg: " ID book Invalid data" });
    return;
  }
  const new_comment = _comment({
    id_user: id_user,
    id_book: id_book,
    name: name,
    comment: comment
  });
  try {
    new_comment.save();
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
    return;
  }
  res.status(201).json({ msg: "success" });
  return;
};

exports.getCommentByIDBook = async (req, res) => {
  if (
    typeof req.body.id_book === "undefined" ||
    typeof req.body.page === "undefined"
  ) {
    res.status(422).json({ msg: "Invalid data" });
    return;
  }
  let { id_book, page } = req.body;
  let count = await _comment.count({ id_book: id_book });
  let totalPage = parseInt((count - 1) / 9 + 1);
  if (parseInt(page) < 1 || parseInt(page) > totalPage) {
    res.status(200).json({ data: [], msg: "Invalid page", totalPage });
    return;
  }
  _comment
    .find({ id_book: id_book })
    .skip(9 * (parseInt(page) - 1))
    .limit(9)
    .sort({ date: 1 })
    .exec((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).json({ msg: err });
        return;
      }
      res.status(200).json({ data: docs, totalPage });
    });
};
