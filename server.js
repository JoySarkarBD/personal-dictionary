// dependencies
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/notFound&ErrorHandler/notFound&ErrorHandler");

// app initialization
const app = express();
dotenv.config();

// express setting
app.set("view engine", "pug");
app.set("views", "views");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.get("/", (req, res) => {
  res.render("pages/home/home.pug");
});

// routes

// not Found Handler
app.use(notFoundHandler);

// error Handler
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  try {
    mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected Successfully!!");
    console.log(`App listening on port ${process.env.PORT || 5000}`);
  } catch (error) {
    console.log(error);
  }
});
