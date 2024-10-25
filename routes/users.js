const express = require("express")
const router = express.Router()
const db = require("../database.js")

module.exports = router

//GET METHOD
router.get("/users", (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return
        }
        res.json({
            data: rows,
        })
    })
})

//POST METHOD
router.post("/users", (req, res) => {
})   

//PUT METHOD
router.put("/:id", (req, res) => {
})   

//DELETE METHOD
router.post("/:id", (req, res) => {
})   


