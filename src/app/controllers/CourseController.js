const { render } = require("node-sass");
const Course = require("../models/Courses");

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/show", { course });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  store(req, res, next) {
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${formData.videoId}/hqdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}
module.exports = new CourseController();
