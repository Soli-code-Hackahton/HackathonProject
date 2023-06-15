const { json } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");
const coockieParser = require("cookie-parser");
const usersRouter = require("./routes/users.js");
const trackingRouter = require("./routes/trackings.js");
const cors = require("cors");
const establishConnection = require("./lib/db.js");
const Agenda = require("agenda");
//!establishing connection with mongodb database
establishConnection();
//! process.env will have all the variables listed in the .env file
require("dotenv").config();
//! logs the requests(tmp)
app.use(morgan("dev"));
//! grant acces to all website to use our resourse(tmp)
app.use(cors());
//! Serving static files located in /public
app.use(express.static("public"));
//! body parser
app.use(json());
//! coockie parser
app.use(coockieParser());

//?routers
const apiPrefix = "/api/v1/";
app.use(apiPrefix + "users/", usersRouter);
app.use(apiPrefix + "tracking/", trackingRouter);

// not found

//! listening
app.listen(process.env.PORT, () => {
  console.log("listening in port ", process.env.PORT || 8080);
});




const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_USERNAME}/findit?retryWrites=true&w=majority`;


const agenda = new Agenda({db: {address: uri}});
agenda.define("send monthly billing report", async (job) => {
    console.log("sending monthly billing report", job);
});

(async function () {
    // IIFE to give access to async/await
    await agenda.start();

    await agenda.every("1 day", "send monthly billing report");
    await agenda.now("test", "hello mom ");
})();
