const express = require("express")
const router = express.Router()
const usersArray = [
    { id: 1, firstName: "John", lastName: "Doe", role: "admin" },
    { id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
    { id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
    { id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
    { id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
]
module.exports = router

//GET : LIRE un utilisateur parmis tous les utilisateurs
router.get("/users", (req, res) => {
    res.json(usersArray)
})

//POST METHOD
router.post("/", (req, res) => {
})   

//PUT METHOD
router.put("/id", (req, res) => {
})   

//DELETE METHOD
router.post("/id", (req, res) => {
})   


