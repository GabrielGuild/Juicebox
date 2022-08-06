const express = require('express');
const usersRouter = express.Router();

function requireUsers(req, res, next) {
    if (!req.user) {
      next({
        name: "MissingUserError",
        message: "You must be logged in to perform this action"
      });
    }
  
    next();
  }
  
  
  module.exports = {
    requireUsers
  }