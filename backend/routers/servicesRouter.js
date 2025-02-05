const express = require("express")
const router = express.Router()
const servicesController = require("../controllers/servicesController")


router.get("/", servicesController.index)
router.get("/:id", servicesController.show)
module.exports = router