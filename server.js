const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 3001;
const cookiePaser = require("cookie-parser");
const handlebars = require("express-handlebars");
///set app static
app.use(express.static("public"));
app.use(express.json());
app.use(cookiePaser());
app.use(express.urlencoded({ extended: true }));
///confirm template engine
app.set("view engine", "hbs");
app.set("views", "./views");
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    partialsDir: path.join(__dirname, "views/partials"),
    helpers: {
      username: () => {
        return "Khách hàng";
      },
    },
  })
);
////
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Sever đã khởi động port ${port}`);
});
