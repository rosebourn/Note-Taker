var path = require("path");

module.exports = function(app) {
    app.get(
        "/",
        function(req, res) {
            console.log(`Received a ${req.method} from URL ${req.url}`)
            res.sendFile(path.join(__dirname, "../public/html/index.html"));
        }
    )

    app.get(
        "/notes",
        function(req, res) {
            console.log(`Received a ${req.method} from URL ${req.url}`)
            res.sendFile(path.join(__dirname, "../public/html/notes.html"));
        }
    )

    app.get(
        "*",
        function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }
    )
}