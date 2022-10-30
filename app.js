const express = require("express");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found </h1>");
});
app.listen(port, () => {
  console.log("server started on port " + port);
});
