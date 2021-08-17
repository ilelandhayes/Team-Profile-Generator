const employeeQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is your team members name?",
    },
    {
        name: "role",
        type: "list",
        message: "What is your team members role?",
        choices: ["Manager", "Intern", "Engineer"],
    },
    {
        name: "id",
        type: "input",
        message: "What is your team member ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your team members email?",
    },
];

const engineerQuestions = [
    {
        name: "github",
        type: "input",
        message: "What is the engineers Github?"
    },
];

const managerQuestions = [
    {
        name: "officeNumber",
        type: "input",
        message: "What is the managers office number?"
    },
];

const internQuestions = [
    {
        name: "school",
        type: "input",
        message: "What school does the intern attend?"
    },
];

const addNewTeamMemberQuestions = [
    {
        name: "addNewMember",
        type: "list",
        message: "Would you like to add a new team member?",
        choices: ["Yes", "No"]
    },
];

module.exports = {
    employeeQuestions, 
    engineerQuestions, 
    managerQuestions,
    internQuestions,
    addNewTeamMemberQuestions
};