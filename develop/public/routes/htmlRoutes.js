// Pulling in path
const path = require("path");

// routes for HTML get request when user visits notes page
module.exports = function(app) {

    app.get("/index", function(req, res) {
      res.sendFile(path.join(__dirname, "../index.html"));
    });
  
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../notes.html"));
    });
  
  };