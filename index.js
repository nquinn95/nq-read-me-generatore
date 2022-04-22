// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");




// TODO: Create an array of questions for user input


//what is your gituhub unsername
//what is your email address
// what is your project title
// please write a short project description
// what kind of license does your project have

//prompt for the user to answer questions above
const questions = [
        {
            type: "input",
            name: "githubUsername",
            message: "What is your github username? "
        },
        {
            type: "input",
            name: "emailAddress",
            message: "What is your email address? "
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project title? "
        },
        {
            type: "input",
            name: "desc",
            message: "Please enter a project description: "
        },
        {
            type: "input",
            name: "license",
            message: `What license did you use? \n MIT \n Apache \n defaults to none if there is no license `,
            default: "None"
        }
];
    // .then((answers) => {
    //     console.log(answers);
    //     console.log(answers.license);
    // })
inquirer.prompt(questions)
    .then((answers) => {
        return generateMarkdown(answers);
    })
    .then(data =>{
        return writeToFile(data);
    })



// TODO: Create a function to write README file
const writeToFile = data => {

    fs.writeFile('reademe.md', data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );




}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
