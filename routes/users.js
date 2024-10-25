const express = require("express")
const router = express.Router()
const db = require("../database.js")
const { getAllUsers, createNewUser } = require("../controllers/usersControllers.js")

module.exports = router

//GET METHOD
router.get("/users", getAllUsers)

//POST METHOD
router.post("/users", createNewUser)   

//PUT METHOD
router.put("/:id", (req, res) => {
})   

//DELETE METHOD
router.post("/:id", (req, res) => {
})   


