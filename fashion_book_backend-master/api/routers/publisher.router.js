"use strict";
const publisher_controller = require("../controllers/publisher.controller");
module.exports = app => {
  app.route("/publisher/all/:page").get(publisher_controller.getAll);
  app.route("/publisher").get(publisher_controller.getPublisher);
  app.route("/publisher/name/:id").get(publisher_controller.getNameByID);
};
