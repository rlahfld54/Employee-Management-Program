const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// router
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const meetingroomsRouter = require("./routes/meetingrooms");

// db
// import connection from './database';
const connection = require("./database");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// ui 안쓰니까 생략한다
// app.use(express.static(path.join(__dirname, 'public')));

// samples
app.use("/", indexRouter);
app.use("/users", usersRouter);

// meetingroom
app.use("/meetingrooms", meetingroomsRouter);

module.exports = app;
