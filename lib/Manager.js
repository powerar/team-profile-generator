class Manager {
    constructor(officeNumber = '', role = '') {
        this.officeNumber = officeNumber
        this.role = role
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;