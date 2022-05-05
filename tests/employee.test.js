const Employee = require('../lib/employee');
const employee = new Employee('shane', '3678', 'shanewilmes@yahoo.com');

test('test to get the values passed in the constructor of employee object', () => {
    expect(employee.name).toBe('shane');
    expect(employee.id).toBe('3678');
    expect(employee.email).toBe('shanewilmes@yahoo.com');

});

test('test to get the name from getName()', () => {
    expect(employee.getName()).toBe('shane');

});


test('test to get the name from getId()', () => {
    expect(employee.getId()).toBe('3678');

});


test('test to get the name from getEmail()', () => {
    expect(employee.getEmail()).toBe('shanewilmes@yahoo.com');

});


test('test to get the name from getName()', () => {
    expect(employee.getRole()).toBe('Employee');

});





