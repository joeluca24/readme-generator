const fs = require("fs")


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
    data2Write += createSection("Installation instructions", data.installation)
    data2Write += createSection("Github repo", data.github)

    fs.writeFile('readme-out.md', data2Write, 'utf8', err => {
        if (err) return console.log(err);
        return console.log("We finished writing the file.");
    });
}

module.exports = {
    writeReadme
}