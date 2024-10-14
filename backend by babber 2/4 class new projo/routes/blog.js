const express = require("express");
const router = express.Router();

// then are three type of work 
// 1 import controller 
const {dummylink} = require("../controller/likecont")
const {createcommant} = require("../controller/commentcont")
const {createPost,getAllPost} = require("../controller/postcont")
const {likepost} = require("../controller/likecont")


// 2 mapping create 
router.get("/dummyroute",dummylink)
router.post("/comments/create",createcommant)
router.post("/post/create",createPost)
router.post("/posts",getAllPost)
router.post("/likes",likepost)


// 3 export 
module.exports = router;