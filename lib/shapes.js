const svgShape = (data) => {
    switch (data.shape.toLowerCase()) {
        case 'circle':
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>

            <text x="150" y="125" font-size="60" fill="${data.textColor}" text-anchor="middle">${data.logoText}</text>

            </svg>`;
        break;
        case 'square':
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            
            <rect width="200" height="200" fill="${data.shapeColor}"/>

            <text x="100" y="125" font-size="60" fill="${data.textColor}" text-anchor="middle">${data.logoText}</text>

            </svg>`;
        break;
        case 'triangle':
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>

            <text x="150" y="170" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>

            </svg>`;
        break;    
        default:
            return ''; 
    }
};

module.exports = svgShape;
