class Employee {
  constructor(name = '', number = '', email = '', role = '') {
    (this.name = name), (this.number = number), (this.email = email), (this.role = role);
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getNumber() {
      return this.number;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
