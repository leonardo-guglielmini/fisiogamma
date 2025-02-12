const staff = require("../data/staff")

function index(req, res) {
    res.json(staff);
}

module.exports = { index }