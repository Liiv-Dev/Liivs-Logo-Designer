// Imports the shapes classes
const { Circle, Square, Triangle } = require('./shapes');


describe('Shape Rendering Tests', () => {
    // tests Triangle SVG
    test('Triangle shape with blue fill color', () => {
        const shape = new Triangle();
        shape.fillColor = "blue";

        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        expect(shape.render()).toEqual(expectedSVG);
    });
    // Tests Square SVG
    test('Square shape with green fill color', () => {
        const shape = new Square();
        shape.fillColor = "green";

        const expectedSVG = `<rect x="70" y="30" width="200" height="200" fill="green" />`;
        expect(shape.render()).toEqual(expectedSVG);
    });
    // Tests Circle SVG
    test('Circle shape with red fill color', () => {
        const shape = new Circle();
        shape.fillColor = "red";

        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red" />`;
        expect(shape.render()).toEqual(expectedSVG);
    });
});