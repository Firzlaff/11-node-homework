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


// for API Routes
app.use("/api", require("../routes/apiRoutes"));
// for HTML Routes 
app.use("/html", require("../routes/HTMLRoutes"))

// Listen to the port provided above and signal that link was successful. 
app.listen(PORT, ()=> console.log("Listening on PORT $(PORT)"));