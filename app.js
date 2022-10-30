const express = require("express");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(port, () => {
  console.log("server started on port " + port);
});
