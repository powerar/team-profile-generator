const Manager = require('../lib/Manager');

test('creates new manager object', () => {
    const manager = new Manager('647-385-6420', 'manager');
    expect(manager.officeNumber).toBe('647-385-6420');
    expect(manager.role).toBe('manager')
});