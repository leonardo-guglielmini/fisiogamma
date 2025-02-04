const express = require("express")
const router = express.Router()
const staffController = require("../controllers/staffController")


router.get("/", staffController.index)
router.get("/:id", staffController.show)
module.exports = router