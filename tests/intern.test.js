const Intern = require('../lib/intern');
const intern = new Intern('shane', '3678', 'shanewilmes@yahoo.com', 'DU');


test('test to get the values passed in the constructor of manager object', () => {
    expect(intern.name).toBe('shane');
    expect(intern.id).toBe('3678');
    expect(intern.email).toBe('shanewilmes@yahoo.com');
    expect(intern.school).toBe('DU');

});


test('test to get the name from getName()', () => {
    expect(intern.getName()).toBe('shane');

});


test('test to get the name from getId()', () => {
    expect(intern.getId()).toBe('3678');

});


test('test to get the name from getEmail()', () => {
    expect(intern.getEmail()).toBe('shanewilmes@yahoo.com');

});


test('test to get the name from getEmail()', () => {
    expect(intern.getSchool()).toBe('DU');

});


test('test to get the name from getName()', () => {
    expect(intern.getRole()).toBe('Intern');

});

