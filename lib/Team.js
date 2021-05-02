const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

const team = [];

buildTeam = function() {
  inquirer
    .prompt([
      {
        type: 'text',
        name: 'name',
        message: "What is the employee's name?",
      },
      {
        type: 'text',
        name: 'id',
        message: "What is the employee's employee ID?",
      },
      {
        type: 'text',
        name: 'email',
        message: "What is the employee's email?",
      },
      {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
      },
    ])
    .then(({ name, id, email, role }) => {
      if (role === 'Manager') {
        inquirer
          .prompt({
            type: 'text',
            name: 'officeNumber',
            message: "Please enter the manager's Office Number:",
          })
          .then(({ officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber, role);
            team.push(this.manager);
            promptAdditional();
          });
      }
      if (role === 'Engineer') {
        inquirer
          .prompt({
            type: 'text',
            name: 'github',
            message: "Please enter the engineer's github username:",
          })
          .then(({ github }) => {
            this.engineer = new Engineer(name, id, email, github, role);
            team.push(this.engineer);
            promptAdditional();
          });
      }
      if (role === 'Intern') {
        inquirer
          .prompt({
            type: 'text',
            name: 'school',
            message: "Please enter the Intern's school:",
          })
          .then(({ school }) => {
            this.intern = new Intern(name, id, email, school, role);
            team.push(this.intern);
            promptAdditional();
          });
      }
    });
};

const promptAdditional = function() {
  inquirer
    .prompt({
      type: "confirm",
      name: "confirmAdd",
      message: "Would you like to enter another employee?",
      default: false
    }).then(({ confirmAdd }) => {
     if (confirmAdd) {
      buildTeam();
    } else {
      return;
    }
  });
};

module.exports = buildTeam;
