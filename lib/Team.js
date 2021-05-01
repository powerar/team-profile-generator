const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');

function Team() {
  this.team = [];
}

Team.prototype.buildTeam = function () {
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
        return inquirer
          .prompt({
            type: 'text',
            name: 'officeNumber',
            message: "Please enter the manager's Office Number:",
          })
          .then(({ officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber, role);
            console.log(this.manager);
          });
      }
    });
};

module.exports = Team;
