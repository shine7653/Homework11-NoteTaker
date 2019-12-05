
// Linking the noteContents in db to this routes.
var noteContents = require("../db/noteContents")

// Create a route
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(noteContents);
    });

    app.post("/api/notes", function(req, res) {
        noteContents.push(req.body);
        res.json(noteContents);

        //  let newNote = req.body;
        // noteData.push(newNote);
        // res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res) {
        let chosen = req.params.id;        
        console.log(chosen);

        for (let i = 0; i < noteContents.length; i++) {
            if (chosen === noteContents[i]) {
                delete noteContents[i];

                noteJSON = JSON.stringify(notes,null,2);
                writeFileAsync("db.json", noteJSON).then(function() {
                console.log ("Note has been deleted!");
            });                 
            }
        }
        return res.json(false);
        // data = data.filter(function(res) {
        //     return noteContent.item.replace(/ /g, '-') !== req.params.id;
    });
        
};

