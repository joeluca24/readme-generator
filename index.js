const inquirer = require('inquirer');
const fs = require('fs');
const writer = require('./writer/readme.js');

inquirer.prompt([
    // WHEN I am prompted for information about my application repository
    {
        
        type: 'input',
        message: "What is your github repo for the application ?",
        name: 'github',
        validate: github => {
            if(github.length < 10){
                return "github link is too short.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },
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
    // Usage, 
    {
        
        type: 'input',
        message: "How do to use this application(usage) ?",
        name: 'usage',
        validate: usage => {
            if(usage.length < 10){
                return "usage input is too short.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },
    


    // License, 
    {
        
        type: 'input',
        message: " What License is the app using ?",
        name: 'license',
        validate: license => {
            if(license.length < 10){
                return "license input is too short.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },


    // Contributing,
    {
        
        type: 'input',
        message: " Who contributed in making this app ?",
        name: 'Contributing',
        validate: Contributing => {
            if(Contributing.length < 10){
                return "Contribution input is too short.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },

    // Tests, 
    {
        
        type: 'input',
        message: " Which tests were used in?",
        name: 'Tests',
        validate:Tests => {
            if(Tests.length < 10){
                return "test input is too short.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },

    // and Questions
    {
        
        
        
        type: 'input',
        message: " Which tests were used in?",
        name: 'tests',
        validate:Tests => {
            if(Tests.length < 10){
                return "test input is too short.";
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