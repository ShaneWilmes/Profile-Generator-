const Engineer = require('../lib/engineer');
const engineer = new Engineer('shane', '3678', 'shanewilmes@yahoo.com','ShaneWilmes');


test('test to get the values passed in the constructor of engineer object', () => {
    expect(engineer.name).toBe('shane');
    expect(engineer.id).toBe('3678');
    expect(engineer.email).toBe('shanewilmes@yahoo.com');
    expect(engineer.gitHub).toBe('ShaneWilmes');

});


test('test to get the name from getName()', () => {
    expect(engineer.getName()).toBe('shane');

});


test('test to get the name from getId()', () => {
    expect(engineer.getId()).toBe('3678');

});


test('test to get the name from getEmail()', () => {
    expect(engineer.getEmail()).toBe('shanewilmes@yahoo.com');

});


test('test to get the name from getEmail()', () => {
    expect(engineer.getGithub()).toBe('ShaneWilmes');

});


test('test to get the name from getName()', () => {
    expect(engineer.getRole()).toBe('Engineer');

});

