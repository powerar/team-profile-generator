const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '', role = 'Engineer') {
        super(name, id, email)
        this.name = name,
        this.id = id,
        this.email = email,
        this.github = github,
        this.role = role
    }

    getOfficeNumber() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Engineer;