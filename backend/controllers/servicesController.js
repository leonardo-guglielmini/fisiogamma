const services = require("../data/services");

function index(req, res) {
    res.json(services);
}

module.exports = { index }