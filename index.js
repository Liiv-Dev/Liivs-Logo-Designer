const inquirer = require('inquirer');
const fs = require('fs');

// Color code format for hex colors
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

//function checks for inputs with valid colors and hex colors 
const validColors = (input) => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white', 'pink'].includes(input.toLowerCase());
    const hexColors = hexColorRegex.test(input);

    return colors || hexColors ? true : 'Please enter a valid color or hex color.';
};

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter exactly 3 characters:',
        validate: function (input) {
            return input.length === 3 ? true : 'Please enter 3 characters.';
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter valid color or hex color:',
        validate: validColors,
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter valid color or hex color:',
        validate: validColors,
    },
];

// Functions to write SVG logo file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('SUCCESS! Logo.svg file created.');
        }
    });
}

// Gives user questions to collect data for svg file
const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            // Assuming svgContent is a function that generates SVG content based on user inputs
            const svgContent = require('./lib/shapes.js');
            writeToFile('logo.svg', svgContent(data));
        })
        .catch((err) => {
            console.log(err);
        });
};

init();



