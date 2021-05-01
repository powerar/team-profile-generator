class Employee {
  constructor(name = '', number = '', email = '') {
    (this.name = name), (this.number = number), (this.email = email);
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

Employee.prototype.getName = function () {
    return Team().buildTeam();
}

module.exports = Employee;
