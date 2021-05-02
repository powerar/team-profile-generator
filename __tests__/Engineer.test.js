const Engineer = require('../lib/Engineer');

test('creates new engineer object', () => {
    const engineer = new Engineer('powerar', 'Engineer');
    expect(engineer.github).toBe('powerar');
    expect(engineer.role).toBe('Engineer');
});