import inquirer from "inquirer";
import fs from "fs/promises"

//using inquirer package to get user input through command-line
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
        references,
        faqs
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

                  {
                    type: "input",
                    name: "faqs",
                    message: "What are the FAQs for this project?",
                    default() {
                      return "- How do I contact you? \n Please check the contact section for more details\n - What is the use of this application?  \n  Please see the usage section for more information\n";
                    },
                  },
            
            ])

//readmeContent is used to store the data that is write into README.md
let readmeContent = 
`${generateLicenceBadge(license)}

# **${projectTitle}**
 
## Table of content

**[*  Project Summary](#heading--1)**

**[*  Project Description](#heading--2)**

**[*  Installation](#heading--3)**

**[*  Usage](#heading--4)**

**[*  Tests](#heading--5)**

**[*  Contribution](#heading--6)**

**[*  License](#heading--7)**

**[*  Contact](#heading--8)**

**[*  References](#heading--9)**

<div id="heading--1"/>

## Project Summary
            
${projectSummary}

<div id="heading--2"/>

## Project Description

${projectDescription}

<div id="heading--3"/>

## Installation

${installation}

<div id="heading--4"/>

## Usage

${usage}

<div id="heading--5"/>

## Tests

${tests}

<div id="heading--6"/>

## Contribution

${contribution}

<div id="heading--7"/>

## License

Distribution under ${license} License. 

<div id="heading--8"/>

## Contact

* Author Name - ${author}

* EmailID - ${email}

* Github profile - https://github.com/${githubUsername}

<div id="heading--9"/>

## References

* ${references}

## FAQS

${faqs}

`;

//To write the generated content into README.md file
await fs.writeFile("./usergeneratedREADME/README.md",readmeContent)

//To generate appropriate license based on user input
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