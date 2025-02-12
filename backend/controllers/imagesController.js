const images = require("../data/images");

function index(req, res) {
    res.json(images);
}

module.exports = { index }