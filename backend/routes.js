"use strict";
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

require("dotenv").config({ path: "../.env" });

const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
let db;

const connectToDB = async () => {
  if (!db) {
    await client.connect();
    db = client.db("Star-Fitness");
  }
  return db;
};

module.exports = (app) => {
  app.get("/hello", (req, res) => {
    return res.status(200).json({ status: 200, message: "Hello there" });
  });
};
