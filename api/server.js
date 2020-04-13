require('dotenv').config()
const express = require("express");
const db = require("../data/dbConfig.js");
const server = express();
const cors = require('cors');

server.use(cors())
server.use(express.json());

module.exports = server;
