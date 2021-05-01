const inquirer = require('inquirer');
const Employee = require('./Employee');

function Team() {
    this.team = [];
}

Team.prototype.buildTeam = function() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'text',
            name: 'number',
            message: "What is the employee's employee number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        }
    ])
        .then(({ name, number, email }) => {
            this.employee = new Employee(name, number, email);
            console.log(this.employee);
        })
};

module.exports = Team;