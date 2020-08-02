const inquirer = require('inquirer');
const fs = require('fs');
const writer = require('./writer/readme.js');

inquirer.prompt([
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
        validate: title => {
            if(title.length < 10){
                return "Title is too short.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },
     {
        type: 'input',
        message: "What is your project description?",
        name: 'description',
        validate: description => {
            if(description.length < 10){
                return "Description is too short.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "How do you install your project?",
        name: 'installation',
        validate: installation => {
            if(installation.length < 10){
                return "Installation  is too short.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },
   
]).then( response => {

    writer.writeReadme(response);

   

});