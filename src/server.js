const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//config statuc files
app.use(express.static(path.join(__dirname, "public")));
//khai báo route
app.get("/", (req, res) => {
  // res.send("Hello bạn");
  res.send("Helllo ");
});
app.get("/abc", (req, res) => {
  res.send("Hello bạn abcd");
});
app.get("/hodanit", (req, res) => {
  res.render("sample.ejs");
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
