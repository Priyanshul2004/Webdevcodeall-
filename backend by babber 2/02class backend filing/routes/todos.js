const express = require("express")
const router = express.Router();

// import controller 
const {createtodo} = require("../controllers/createtodo")
const {gettodo} = require("../controllers/gettodo")
const {gettodobyid} = require("../controllers/gettodo")
const {updatetodo} = require("../controllers/updatetodo")
const {deletetodo} = require("../controllers/deletetodo")

// defrine api routes 
router.post("/createtodo",createtodo);
router.get("/gettodo",gettodo);
router.get("/gettodobyid/:id",gettodobyid);
router.put("/updatetodo/:id",updatetodo);
router.delete("/deletetodo/:id",deletetodo);

module.exports = router;
