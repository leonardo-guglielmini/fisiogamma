const express = require("express")
const router = express.Router()
const imagesController = require("../controllers/imagesController")


router.get("/", imagesController.index)
module.exports = router