console.log("Hospital Backend Running"); 
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hospital Management Backend Working!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

