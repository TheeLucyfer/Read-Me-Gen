const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "badgeName",
        message: "Name of your badge?"
    },
    {
        type: "input",
        name: "badgeStatus",
        message: "What is the status of your badge?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    // {
    //     type: "input",
    //     name: "Table Of Contents",
    //     message: "ex format: 1. Example 2. Example two, etc"
    // },
    {
        type: "input",
        name: "Installation",
        message: "Installation instructions go here"
    },
    {
        type: "input",
        name: "Usage",
        message: "Usage instructions go here"
    },
    {
        type: "input",
        name: "License",
        message: "License information goes here"
    },
    {
        type: "input",
        name: "Contribution",
        message: "Contribution instructions go here"
    },

    {
        type: "input",
        name: "tests",
        message: "Test description goes here"
    },
    {
        type: "input",
        name: "Question",
        message: "Put any known questions here"
    },



]).then(data => {
    console.log(data)
    var body = `
![badge](https://img.shields.io/badge/${data.badgeName}-${data.badgeStatus}-green.svg)
# ${data.title}
${data.description}

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contribution)

# Installation
${data.Installation}
# Usage
${data.Usage}
# License
${data.License}
# Contribution
${data.Contribution}
# Tests
${data.tests}
# Questions
${data.Question}
`
    fs.writeFile(
        "output.md",
        body,
        (err) => {
            if (err) throw err;
            console.log('Folder written to...')
        });
})