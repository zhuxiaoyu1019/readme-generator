// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: input => input !== "" ? true : "Please enter your name"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: input => input !== "" ? true : "Please enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: input => input !== "" ? true : "Please enter your email address"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short breif description of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "list",
        name: "color",
        message: "What color would do you like for your badge?",
        choices: ["brightgreen", "green", "yellowgreen", "yellow", "orange", "red", "blue", "lightgrey", "blueviolet"]
    },
    {
        type: "confirm",
        name: "table",
        message: "Is your README going to be very long?"
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "use",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?"
    }
];

// Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log("README.md generated!"));
}

// Create a function to initialize app
async function init() { 
    const response = await inquirer.prompt(questions);
    const markdownTemplate = await generateMarkdown(response);
    writeToFile("READMESample.md", markdownTemplate);
}

// Function call to initialize app
init();
