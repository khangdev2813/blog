class SiteController {
  index(req, res) {
    res.render("homeHoHo");
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
