const express = require("express");
const router = express.Router();

const {localfileupload,imageupload} =require("../controllers/fileupload");

router.post("/localfileupload",localfileupload);
router.post("/imageupload",imageupload);


module.exports = router;
