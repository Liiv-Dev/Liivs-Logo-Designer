// imports npm inquirer 
const inquirer = require('inquirer');
const fs = require('fs');
// Imported shape constructors
const { Circle, Triangle, Square } = require('./lib/shapes');

// Define shapes object with constructors
const shapes = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square
};

// Function to generate SVG content based on user input
function svgShape(data) {

    // Retrieve user input
    const { logoText, textColor, shape, shapeColor } = data;

    // Generate the shape based on user choice
    let selectedShape = new shapes[shape]();
    selectedShape.fillColor = shapeColor;

    // Sets text positioning to zero 
    let textX = 0;
    let textY = 0;

    switch (shape.toLowerCase()) {
    case 'circle':
        textX = 150; 
        textY = 125;
        break;
    case 'triangle':
        textX = 150;
        textY = 170;
        break;
    case 'square':
        textX = 170;
        textY = 130;
        break;
    default:
        break;
    }

    // Generates the full SVG content using user input and generate shape function
    const fullSVGContent = 
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${selectedShape.render()}  
            <text x="${textX}" y="${textY}" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>
        </svg>`;

    return fullSVGContent;
}

  // Color code format for hex colors
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

//function checks for inputs with valid colors and hex colors 
const validColors = (input) => {
    const colors = [
        `red`, `green`, `blue`, `yellow`, `purple`, `orange`, `black`,
        `white`, `pink`, `cyan`, `brown`, `teal`, `maroon`, `lavender`
    ];

    const hexColors = hexColorRegex.test(input);

    if (colors.includes(input) || input.match(hexColors)) {
        return true;
    } else {
        return 'Please enter a valid color or hex color';
    }
};

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter exactly 3 characters:',
        validate: function (input) {
            return input.length > 3 || input.length < 0 ? 'Please enter 3 characters.' : true;
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter color for text:',
        validate: validColors,
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please Choose a shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter valid shape color:',
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
            writeToFile('logo.svg', svgShape(data));
        })
        .catch((err) => {
            console.log(err);
        });
};

init();