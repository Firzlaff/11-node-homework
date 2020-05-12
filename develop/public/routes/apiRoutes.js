
const notesData = require("");
const data2 = require("");


module.exports = function(app) {

  app.get("", function(req, res) {
    res.json(tableData);
  });

  app.get("", function(req, res) {
    res.json(waitListData);
  });
};