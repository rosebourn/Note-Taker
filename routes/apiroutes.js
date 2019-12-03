var notes = require("../db.json");

module.exports = function(app) {
    app.get(
        "/api/notes",
        function(req, res) {
            console.log(`Received a ${req.method} request from ${req.url}`)
            res.json(notes);
            
        }
    )

    app.post(
        "/api/notes",
        function(req, res) {
            console.log(`Received a ${req.method} request from ${req.url}`)
            console.log(req.body)
            notes.push(req.body);
            res.json({ok: true})
        }
    )
}
