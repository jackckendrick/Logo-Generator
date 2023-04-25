const fileSystem = require("fs");
const shapeFile = require("./lib/shapes");
const inquirer = require("inquirer");

function writeToFile(logoText, fontColor, logoShape, logoColor, shapeFile) {
    const shapes = shapeFile[logoShape];
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${shapes.svg(logoColor)}
    <text x="151" y="126" font-size="63" fill="${fontColor}" dy="-0.27rem" text-anchor="middle">${logoText} </text>
    </svg>`;
}
inquirer
.prompt([
    {
        type: "input",
        name: 'logoText',
        message: "Provide the logo text in 3 characters or less",
    },
    {
        type: "input",
        name: 'fontColor',
        message: "Please indicate the desired text color by typing the hex code or color name.",
    },
    {
        type: "list",
        name: 'logoShape',
        message: "Please chose a shape for your logo.",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        name: 'logoColor',
        message: "Please indicate the desired shape color by typing the hex code or color name.",
    },
])
.then(({logoText, fontColor, logoShape, logoColor}) => {
    const includedInSvg = writeToFile(logoText, fontColor, logoShape, logoColor, shapeFile);
    fileSystem.appendFile('./examples/' + `${logoShape}-${logoText}.svg`, includedInSvg, (err) => {
        if (err) {
            return console.log(err);
        } else{
            console.log("Your logo has been successfully generated!");
        }
        });
});

