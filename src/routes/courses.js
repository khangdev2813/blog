const express = require("express");
const router = express.Router();
const CourseControllers = require("../app/controllers/CourseController");

router.use("/create", CourseControllers.create);
router.use("/store", CourseControllers.store);
router.use("/:slug", CourseControllers.show);

module.exports = router;
