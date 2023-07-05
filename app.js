require("dotenv").config();
const express = require("express");
const app = express();
app.set("view engine", "ejs");
console.log(__dirname + "/public");
app.use("/home", express.static("public"));
const PORT = 3500 || process.env.PORT;

app.get("/home", (req, res) => {
  console.log("Getting Lade Stores home page...");
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
