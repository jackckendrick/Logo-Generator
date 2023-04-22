const svgFile = require("./generateSvg");
const fileSystem = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const validateInput = (answer)=>{
    if(answer !== ""){
        return true
    } else{
        return "answer is required"
    }
};

//This array contains the quetions that require the user to input an answer
const questions = [
    {
        type: "input",
        message: "Provide the logo text in 3 characters or less",
    },
    {
        type: "input",
        message: "Please indicate the desired text color by typing the hex code or color name.",
    },
    {
        type: "list",
        message: "Pleae chose a shape for your logo.",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        message: "Please indicate the desired shape color by typing the hex code or color name.",
    }
];

// This function writes a README file
function writeToFile(fileName, data) {
    fileSystem.writeFile(fileName, svgFile(data), function (error) {
        if (error) {
            return console.log(error);
        }
    });
};

//This function initializes the app
function init() {
    inquirer.prompt(questions).then((data => {
        console.log(data);
        writeToFile(path.join(__dirname,"/examples/","logo.SVG"), data);
    }));
};

// Function call to initialize app
init();