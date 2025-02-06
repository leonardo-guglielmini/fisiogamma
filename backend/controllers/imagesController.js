const images = require("../data/images");

function index(req, res) {
    console.log("INDEX");
    res.json(images);
}

module.exports = { index }