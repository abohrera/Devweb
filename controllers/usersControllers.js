const db = require('../database.js')

// GET ALL USERS FROM THE DATABASE
exports.getAllUsers = function (req, res) {
	db.all("SELECT * FROM users", [], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
		} else {
			res.json(rows)
		}
	})
}

//POST create a new user based on the body's data

exports.createNewUser = (req, res) => {
    const { firstName, lastName } = req.body
    
   
 // Alphanumeric only regex
	function isAlphanumeric(str) {
		const regex = /^[a-zA-Z0-9]+$/
		return regex.test(str)
	}
    
// add some error hadling here
	if (!firstName || !lastName)
		return res
			.status(400)
			.json({ error: "Le prénom et le nom de famille sont requis !" })

    if (!isAlphanumeric(firstName) || !isAlphanumeric(lastName))

    // run SQL query here
    db.run(
		"INSERT INTO users (firstName, lastName) VALUES (?, ?)",
		[firstName, lastName],
		function (err) {
			if (err) {
				res.status(500).json({ error: err.message })
			} else {
				res.status(201).json({ id: this.lastID, firstName })
			}
		}
	)
}