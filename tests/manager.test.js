const Manager = require('../lib/manager');
const manager = new Manager('shane', '3678', 'shanewilmes@yahoo.com', '10');


test('test to get the values passed in the constructor of manager object', () => {
    expect(manager.name).toBe('shane');
    expect(manager.id).toBe('3678');
    expect(manager.email).toBe('shanewilmes@yahoo.com');
    expect(manager.officeNumber).toBe('10');

});


test('test to get the name from getName()', () => {
    expect(manager.getName()).toBe('shane');

});


test('test to get the name from getId()', () => {
    expect(manager.getId()).toBe('3678');

});


test('test to get the name from getEmail()', () => {
    expect(manager.getEmail()).toBe('shanewilmes@yahoo.com');

});


test('test to get the name from getEmail()', () => {
    expect(manager.getOfficeNumber()).toBe('10');

});


test('test to get the name from getName()', () => {
    expect(manager.getRole()).toBe('Manager');

});

