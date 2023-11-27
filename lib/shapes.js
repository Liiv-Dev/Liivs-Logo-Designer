const { shape, shapeColor, textColor, logoText } = data; // Destructure data object

const svgShape = (shape,data) => {
    switch (shape.toLowerCase()) {
        case 'circle':
            return `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>
            <text x="50%" y="50%" fill="${data.textColor}" text-anchor="middle">${data.logoText}</text>`;
        case 'square':
            return `<rect x="90" y="40" width="300" height="200" fill="${data.shapeColor}"/>
            <text x="50%" y="50%" fill="${data.textColor}" text-anchor="middle">${data.logoText}</text>`;
        case 'triangle':
            return `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>
            <text x="150" y="170" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>`
        default:
            return ''; 
    }
};

const svgContent = (data) => {
    const chosenShape = svgShape(shape, data); // Call svgShape function passing shape and data

    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        ${chosenShape}

    </svg>`;
};

module.exports = svgContent;
