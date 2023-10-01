const express = require("express");
const router = express.Router();
const newControllers = require("../app/controllers/NewController");

router.use("/:slug", newControllers.show);

module.exports = router;
