const mysql = require('mysql2');
const inquirer = require("inquirer");
// const express = require("express");
// require('dotenv').config();

// const PORT = process.env.PORT || 3306;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

//connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: employee_db,
  },
  console.log("Connected to the employee_db database!")
);

init = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "selection",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_ALL_EMPLOYEES"
        },
        
      ]
    }
  ])
}