const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const http = require("http");

const app = express();

// const { Server } = require("socket.io");
const server = http.createServer(app);
//middle-wares
app.use(express.json());
app.use(cors());

//connecting database

mongoose.connect("mongodb+srv://maqure:Maqure123@cluster1.1d4llrs.mongodb.net/UserData?retryWrites=true&w=majority", (err) => {
  if (!err) {
    console.log("successful connection with the server");
  }
  else
    console.log("Error in the connectivity");
});

var user = require("./Schema.js");

app.post("/details", async (req, res, next) => {
  // console.log(req.body);
  const data = new user({
    company_name: req.body.companyname,
    owner_name: req.body.ownername,
    email: req.body.email,
    phone: req.body.phone,
    wym: req.body.wym,
    remarks: req.body.remarks,
  });
  try {
    const result = await data.save();
    console.log(result);
    res.send({ user: true, data: result });
  } catch (e) {
    res.send({ user: false });
  }
});

app.get("/", (req, res, next) => {
  res.send("SERVER WORKING");
});

server.listen(5000, () => {
  console.log("server is created");
});
