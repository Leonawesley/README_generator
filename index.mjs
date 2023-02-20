import inquirer from "inquirer";
import fs from "fs/promises"

let {
        githubUsername,
        email,
        projectTitle,
        projectSummary,
        projectDescription,
        installation,
        usage,
        contribution,
        tests,
        license,
        author,
        references
    } = await inquirer
            .prompt([
                
                {
                    type: "input",
                    name: "projectTitle",
                    message: "What is the title of your project?",
                    default() {
                      return "Professional README Generator";
                    },
                },

                {
                    type: "input",
                    name: "projectSummary",
                    message: "Give a short description of your project?",
                    default() {
                      return "This project is used to create a README file based on user input";
                    },
                },

                {
                    type: "input",
                    name: "projectDescription",
                    message:
                      "Please give your project installation steps",
                    default() {
                      return "This project uses node js and inquirer. This application uses command line to get user input and generate a custom README file based on the information from the user";
                    },
                },

                {
                    type: "input",
                    name: "installation",
                    message:
                      "Please give your project installation steps",
                    default() {
                      return "No installation required";
                    },
                },

                {
                    type: "input",
                    name: "usage",
                    message: "How do you use your project?",
                    default() {
                      return "Provide your application usage how and where it can be used. Give a demo or screenshot of your application";
                    },
                },

                {
                    type: "input",
                    name: "contribution",
                    message: "How can others contribute to your project?",
                    default() {
                      return "Any contributions towards the project is greatly appreciated. Please contact me using the email in the contact section. Thank you for your time";
                    },
                },

                {
                    type: "input",
                    name: "tests",
                    message: "How do you test your application?",
                    default() {
                      return "create a test plan according to the application requirements. Develop manual test case scenarios from the end users perspective. Automate the test scenarios using scripts";
                    },
                  },

                {
                    type: "list",
                    name: "license",
                    message: "What license does your project have?",
                    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
                    default() {
                      return "MIT";
                    },
                },

                {
                    type: "input",
                    name: "author",
                    message: "Who is the author of this project?",
                    default() {
                      return "Leona Wesley";
                    },
                },

                {
                    type: "input",
                    name: "githubUsername",
                    message: "What is your GitHub username?",
                    default() {
                      return "Leonawesley";
                    },
                },

                {
                    type: "input",
                    name: "email",
                    message: "What is the emailID?",
                    default() {
                      return "leonaJenishlin@gmail.com";
                    },
                },


                {
                    type: "input",
                    name: "references",
                    message: "Give references for your project?",
                    default() {
                      return "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax";
                    },
                  },
            
            ])

let readmeContent = 
`${generateLicenceBadge(license)}

# Project Title

${projectTitle} 

## Table of content

**[1. Project Summary](#heading--1)**

<div id="heading--1"/>

## Project Summary 
            
${projectSummary}

`



await fs.writeFile("./usergeneratedREADME/README.md",readmeContent)

function generateLicenceBadge(license) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache 2.0") {
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL 3.0") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "None") {
      return "No License";
    }
  }