const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates new Employee object', () => {
    const employee = new Employee('Andrew', 1234, 'arpower@bell.net');

    expect(employee.name).toBe('Andrew');
    expect(employee.number).toEqual(expect.any(Number));
    expect(employee.email).toBe('arpower@bell.net');
});