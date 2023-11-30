const { Circle, Square, Triangle } = require('./shapes'); // Import the shapes classes

// Test cases for Circle class
describe('Circle', () => {
    test('generates SVG for Circle', () => {
        const circle = new Circle('blue');
        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="blue" />';
        expect(circle.generateSVG()).toEqual(expectedSVG);
    });

});

// Test cases for Square class
describe('Square', () => {
    test('generates SVG for Square', () => {
        const square = new Square('green');
        const expectedSVG = '<rect x="70" y="30" width="200" height="200" fill="green" />';
        expect(square.generateSVG()).toEqual(expectedSVG);
    });

});

// Test cases for Triangle class
describe('Triangle', () => {
    test('generates SVG for Triangle', () => {
        const triangle = new Triangle('red');
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="red" />';
        expect(triangle.generateSVG()).toEqual(expectedSVG);
    });

});