// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter your project description",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the usage information",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license",
        choices: [/*License stuff goes here*/],
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter the contribution guidelines",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter the testing instructions",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Successfully generated readme file!")
        );
}
const generatePage =({/*list of variables*/}) =>
`#${title}

##Description
${description}

##Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Tests](#tests)
-[Questions](#questions)

##Installation
${installation}

##Usage
${usage}

##License
License stuff goes here

##Contributing
${contributing}

##Tests
${tests}

##Questions
[My GitHub profile](https://github.com/${username})
To reach me for further questions, contact me at ${email}`;

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmePageContent = generatePage(answers);
            writeToFile("generatedReadme.md", readmePageContent);
        });
}

// Function call to initialize app
init();
