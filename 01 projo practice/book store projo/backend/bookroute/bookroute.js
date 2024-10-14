const express = require("express");
const router = express.Router();

const { addbook } = require("../controller/bookadd");
const {upbook} = require("../controller/updatebook");
const {deletebook} =require("../controller/deletebook");


router.post("/add", addbook);
router.put("/upbook/:id",upbook)
router.delete("/delete/:id",deletebook)


module.exports = router;
