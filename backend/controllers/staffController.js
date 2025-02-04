const staff = require("../data/staff")

function index(req, res) {
    console.log("INDEX");
    res.json(staff);
}

function show(req, res) {
    console.log("SHOW");
    const id = parseInt(req.params.id);

    const employee = staff.find((el) => el.id === id);
    res.json(employee);
}

module.exports = { index, show }