const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const path = require('path');
const outputDir = path.resolve(__dirname, "output");



const myTeam = [];




const getManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Manager office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        myTeam.push(manager);
        userMenu();
    })
}

const userMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Choose which Employee you would like to add next:',
            choices: ['Engineer', 'Intern', 'Team completed']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Engineer":
                    getEngineer();
                    break;
                case "Intern":
                    getIntern();
                    break;
                default:
                    // buildTeam();
            }
        });
};

const getEngineer = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter Engineer employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter the employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter their email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter Engineer Github username. (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        myTeam.push(engineer);
        userMenu();
    })
};

const getIntern = () => {
    

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter intern employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter their email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter intern email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter their school name. (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter your school name!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        myTeam.push(intern);
        userMenu();
    })
};











getManager();
