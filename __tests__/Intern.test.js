const Intern = require('../lib/Intern');

test('creates new intern object', () => {
    const intern = new Intern('U of T', 'Intern');
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
});