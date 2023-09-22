const newsRouter = require("./news");
const siteRouter = require("./site");
const string = "khang";
function route(app) {
  app.use("/news", newsRouter);

  app.use("/", siteRouter);
}

module.exports = route;
