const svgShape = (data) => {
    switch (data.shape.toLowerCase()) {
        case 'circle':
            return `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>
            <text x="50%" y="50%" fill="${data.textColor}" text-anchor="middle">${data.logoText}</text>`;
        break;
        case 'square':
            return `<rect x="90" y="40" width="300" height="200" fill="${data.shapeColor}"/>
            <text x="50%" y="50%" fill="${data.textColor}" text-anchor="middle">${data.logoText}</text>`;
        break;
        case 'triangle':
            return `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>
            <text x="150" y="170" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>`;
        break;    
        default:
            return ''; 
    }
};

module.exports = svgShape;
