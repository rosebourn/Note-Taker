var notes = require("../db.json");
var fs = require('fs');
var path = require("path");
var ids = [];

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
            console.log(req.body);
            var id = ids.length;
            ids.push(id);
            req.body["id"] = id;
            notes.push(req.body);
            res.json({ok: true});
            let data = JSON.stringify(notes);
            fs.writeFile('db.json', data, function (err) {
                if (err) throw err;
                console.log('Updated!'); 
             

            });
        }
    )

    app.delete(
        "/api/notes/:id",
        function(req, res) {
            var id = req.params.id;
            console.log(id);
            notes = notes.filter(obj => obj.id != id)
            let data = JSON.stringify(notes);
            fs.writeFile('db.json', data, function (err) {
                if (err) throw err;
                console.log('Updated!'); 

                // document.location.reload(true);
                res.redirect("/notes");
            

            });
            console.log(notes);
        }    
        )

       
}

