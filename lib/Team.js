const inquirer = require('inquirer');
const Manager = require('./Manager');

var team = [];

buildTeam = function () {
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
            team.push(this.manager);
            console.log(team);
          });
      }
    });
};
