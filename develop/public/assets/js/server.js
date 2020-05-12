// Adding Express 
const express = require("express");
// creating express server 
const app = express();
// Setting the Port
const PORT = process.env.port || 3000;

// Using Express to handle the data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// for public file
app.use(express.static("public"));


// Router for API Routes
require("../routes/apiRoutes")(app);
// Router for HTML Routes
require("../routes/htmlRoutes")(app);

// Listen to the port provided above and signal that link was successful. 
app.listen(PORT, ()=> console.log("Listening on PORT $(PORT)"));