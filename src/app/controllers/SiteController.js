const { render } = require("node-sass");
const Course = require("../models/Courses");

class SiteController {
  index(req, res, next) {
    Course.find({})
      .lean()
      .then((course) => {
        res.render("home", {
          course,
        });
      })
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
