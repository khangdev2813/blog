class SiteController {
  index(req, res) {
    res.render("home");
  }
  search(req, res) {
    res.render("new");
  }
}
module.exports = new SiteController();
