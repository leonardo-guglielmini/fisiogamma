const services = require("../data/services");

function index(req, res) {
    console.log("INDEX");
    res.json(services);
}

function show(req, res) {
    console.log("SHOW");
    const id = parseInt(req.params.id);

    const service = services.find((el) => el.id === id);
    res.json(service);
}

module.exports = { index, show }