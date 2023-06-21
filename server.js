const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.send("Welcome to my Nathan's backend application");
});

app.get("/nathan", (req,res) =>{
    res.send("Hello Nathan!");
});

app.listen(3000,() => {
    console.log("Listening");
})