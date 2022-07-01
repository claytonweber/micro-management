const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");
// const cTable = require("console.table");

//Set PORT variable and call express so we use it
// const PORT = process.env.PORT || 3001;
// const app = express;
//express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());





// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Bigpiggy1!',
    database: 'employees_db'
  },
  console.log(`Connected to the employee_db database.`)
);

const promptList = () => {
  inquirer
    .prompt({
      type: 'list',
      name: 'choice',
      message: 'Please make your selection.',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
    })
    .then((selection) => {
      switch (selection.choice) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addADepartment();
          break;
        case 'Add a role':
          addARole();
          break;
        case 'Add an employee':
          addAnEmployee();
          break;
        // case 'Update an employee role':
          // updateRole();
          // break;
        //default break probably
        default:
          console.log('Quit selected');
          break;
      }
    })
};


//view things

function viewAllDepartments() {
  const sql = `SELECT departments.id AS id,
               departments.department_name AS departments FROM departments`;
  connection.query(sql, (err, selection) => {
    if (err) throw err;
    console.log(`All Departments:`);
    console.table(selection);
    promptList();
  });
};

function viewAllRoles() {
  const sql = `SELECT roles.id AS id,
                roles.title AS title,
                roles.salary,
                roles.department_id AS department_id FROM roles`
  connection.query(sql, (err, selection) => {
    if (err) throw err;
    console.log(`All Roles:`);
    console.table(selection);
    promptList();
  })
}

function viewAllEmployees() {
  const sql = `SELECT employees.id,
                employees.first_name,
                employees.last_name,
                employees.role_id,
                employees.manager_id AS manager_id FROM employees`;   
  connection.query(sql, (err, selection) => {
    if (err) throw err;
    console.log(`All Employees:`);
    console.table(selection);
    promptList();
  })
}

//add things

const addADepartment = () => {
  inquier
    .prompt([
      {
        type: 'input',
        name: 'addDepartment',
        message: "What department would you like to add?"
      }
    ])
    .then((selection) => {
      const sql =`INSERT INTO departments (departments.department_id) 
                    VALUES (id)`;
      connection.query(sql, selection, (err, res) => {
        if (err) throw err;
        console.log(`Department Added:`);
        console.table(selection);
        promptList();
      })
    })
}
//TODO would like to make a manager list instead of just allEmployees
//TODO add employee throws error
const addAnEmployee = () => { 
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?"
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?"
      },
      {
        type: 'list',
        name: 'role_id',
        message: "What is the new employee's role?",
        choices: [
          'Sales Lead',
          'Salesperson',
          'Lead Engineer',
          'Software Engineer',
          'Account Manager',
          'Accountant',
          'Office Joker',
          'Cereal Inspector',
          'Cash Counter'
        ]
      },
      {
        type: 'list',
        name: 'manager_id',
        message: "Who will the new employee's manager be?",
        choices: ['Joe','Mama', 'Whoopie']
      }
    ])
    .then((selection) => {
      const sql =`INSERT INTO employees (first_name, last_name, role_id, manager_id) 
                    VALUES ('${selection.first_name}', '${selection.last_name}', '${selection.role_id}', '${selection.manager_id}')`
      connection.query(sql, selection, (err, res) => {
        if (err) throw err;
        console.log(`Employee added!`);
        console.table(selection);
        promptList();
      })
    })
}
//might need to put addARole above create employee? hoisting?
const addARole = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the role?'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'How much does the role pay?'
      },
      {
        list: 'list',
        name: 'department_id',
        message: 'Which department does the role belong to?',
        choices: [
          'Sales',
          'Engineering',
          'Finance',
          'Legal',
          'Programming'
        ]
      }
    ])
    .then((selection) => {
      const sql =`INSERT INTO roles (title, salary, department_id) 
                    VALUES (id)`;
      connection.query(sql, selection, (err, res) => {
        if (err) throw err;
        console.log(`Role added!`);
        console.table(selection);
        promptList();
      })
    })
}

//update employee role, 

// app.listen(PORT, () => {
//   console.log(`Server running on port localhost:${PORT}`);
// });


promptList();
