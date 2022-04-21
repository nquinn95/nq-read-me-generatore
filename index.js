// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");


// TODO: Create an array of questions for user input
const questions = ["What is your github username?", "What is your email address", "What is your project title", "Please write a short project description:", "What kind of license does your project have?"];

//what is your gituhub unsername
//what is your email address
// what is your project title
// please write a short project description
// what kind of license does your project have

//prompt for the user to answer questions above
inquirer
    .prompt([
        {
            type: "input",
            name: "githubUsername",
            message: questions[0]
        },
        {
            type: "input",
            name: "emailAddress",
            message: questions[1]
        },
        {
            type: "input",
            name: "projectTitle",
            message: questions[2]
        },
        {
            type: "input",
            name: "desc",
            message: questions[3]
        },
        {
            type: "input",
            name: "license",
            message: questions [4] + `\n MIT \n Apache \n defaults to none if there is no license `,
            default: "None"
        }

    ])
    .then((answers) => {
        console.log(answers);
        console.log(answers.license);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
