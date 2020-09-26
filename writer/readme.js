const fs = require("fs")
// THEN a quality, professional README.md is generated with the title of your project and sections entitled 
// Description,
// Table of Contents, 
// Installation, 
// Usage, 
// License, 
// Contributing, 
// Tests, 
// and Questions
const contentsList = ["Installations", "Usage", "License", "Contributing", "Tests", "Questions"]


const createSection = function (title, description) {
    let out = "";
    out += `## ${title}\n`; // heading #2
    out += "\n";
    out += `${description}\n`; // data under heading
    out += "\n";
    return out;
}

var writeReadme = function (data) {
    console.log(data)

    // fs.writeFile('readme-out.md', JSON.stringify(response, null, 2), 'utf8', err => {
    //     if(err) return console.log(err);
    //     return console.log("We finished writing the file.");
    // });
    let data2Write = "";
    data2Write += `# ${data.title}\n`;
    data2Write += "\n";
    data2Write += createSection("Description", data.description)
    data2Write += `## Table of Contents\n`; // heading #2
    data2Write += "\n";
    for (i = 0; i < contentsList.length; i++) {
        data2Write += `${i+1}. ${contentsList[i]}\n`;
        data2Write += "\n";
    }
    data2Write += createSection("Installation instructions", data.installation)
    data2Write += createSection("Github repo", data.github)
    data2Write += createSection("Usage", data.usage)
    data2Write += createSection("License" , data.license)
    data2Write += createSection("Contributing" , data.Contributing)
    data2Write += createSection("Tests" , data.Tests)
    data2Write += createSection("Questions" , data.Questions)

   


    fs.writeFile('readme-out.md', data2Write, 'utf8', err => {
        if (err) return console.log(err);
        return console.log("We finished writing the file.");
    });
}

module.exports = {
    writeReadme
}