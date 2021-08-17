const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const {
    employeeQuestions, 
    engineerQuestions, 
    managerQuestions,
    internQuestions,
    addNewTeamMemberQuestions,
} = require('./src/questions.js');


const managerArray = [];
const internArray = [];
const engineerArray = [];


const theTeam = async () => {
    let employee = await inquirer.prompt(employeeQuestions);
    try {
        switch (employee.role) {
            case 'Manager':
                let officeObj = await inquirer.prompt(managerQuestions);
                const manager = new Manager(
                    employee.name,
                    employee.id,
                    employee.email,
                    officeObj.officeNumber
                );
                managerArray.push(manager);
                break;

            case 'Intern':
                let schoolObj = await inquirer.prompt(internQuestions);
                const intern = new Intern(
                    employee.name,
                    employee.id,
                    employee.email,
                    schoolObj.school
                );
                internArray.push(intern);
                break;

            case 'Engineer':
                let gitHubObj = await inquirer.prompt(engineerQuestions);
                const engineer = new Engineer(
                    employee.name,
                    employee.id,
                    employee.email,
                    gitHubObj.github
                );
                engineerArray.push(engineer);
                break;
                default:"";
        }
    } catch (error) {
        console.log(error);
    }

};

const addNewMembers = async () => {
    let addMember = "Yes";
    let addMoreMembersObj;
    while (addMember === "Yes") {
      addMoreMembersObj = await inquirer.prompt(addNewTeamMemberQuestions);
      addMember = await addMoreMembersObj.addNewMember;
      if (addMember === "Yes") {
        await theTeam();
      }
    }
};

const init = async () => {
    
    try {
        await theTeam();
        await addNewMembers();
        await writeFileAsync("./dist/test-index.html", generateHTML(managerArray, internArray, engineerArray)
        );
        console.log("Successfully written too HTML file!");
      } catch (err) {
        console.log(err);
      }

};

init();