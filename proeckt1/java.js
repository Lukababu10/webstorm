const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res)) => {
    res.send("ოგესალმებით მტავარ გვერდზე.");
});

app.get("/contact",(rep, res)) => {
    res.send("ეს არის პროფილის გვერდი.");
});

app.get("/profile", (req, rea))=> {
    res.send("ეს არის პროფილის გვერდი.");
});

app.get("/about", (req, rea))=> {
    res.send("ეს არის ჩვენი შესახებ გვერდი.");
});

app.get("/about", (req, rea))=> {
    res.send(`სერვერი გაშვებულია: http://localhost:${PORT}`);
});