const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//connect to express app
const app = express();
//connect to mongo
const dbURI =
  "mongodb+srv://rah33m:Gunster123!@cluster10.4yvhm.mongodb.net/mafiabase?retryWrites=true&w=majority&appName=Cluster10";

mongoose
  .connect(dbURI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database connection error: ", err));

//middleware

//schema

//rout
