const inquirer = require('inquirer');
const questions = require('./src/questions.js');
const generateHTML = require('./utils/generateMarkdown');
const fs = require('fs');

// function that writes HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        (error) ? log.error(error) : console.log('Successfully wrote to index.html file')
    })
}

function init() {

    inquirer.prompt(questions)
    .then(data => {
        markdown = generateHTML(data);
    })
    .then(data => {
        writeToFile("./dist/test-index.html", markdown);
    })
    .catch(err => console.log(err));

}

init();