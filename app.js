var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//personalization
const config = require("config");
const mongoose = require("mongoose");
const helmet = require("helmet");
var routeManager = require("./routes");
var app = express();
//personalization
mongoose.connect(config.get("app.db"), { useNewUrlParser: true, useUnifiedTopology: true });
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//personalization
app.use("/", routeManager);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  if (req.headers["content-type"] == "application/json") {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  } else {
    res.status(404).render("misc/404", {
      title: "Not Found",
      status: 404,
      url: req.url
    });
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("misc/error");
});

module.exports = app;
